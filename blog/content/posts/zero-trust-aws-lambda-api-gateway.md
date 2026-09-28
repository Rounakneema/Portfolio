---
title: "Implementing Strict IAM and Mutual TLS for AWS API Gateway"
date: "2025-06-28"
tags: ["AWS", "Zero Trust", "API Security"]
excerpt: "How we locked down our serverless infrastructure by enforcing mutual TLS at the gateway and scoping IAM execution roles to precise boundaries."
---

Serverless architectures shift the security perimeter. When deploying AWS Lambda functions behind API Gateway, traditional network controls like VPC security groups become secondary. The primary defense mechanism shifts directly to identity, access management, and request authentication.

During the architecture phase of a high-compliance microservice, we identified several security weaknesses in standard API Gateway deployments. Default configurations rely on static API keys, broadly scoped IAM execution roles, and overly permissive resource policies. We redesigned the perimeter around mutual TLS (mTLS) and strictly scoped IAM policies.

## Enforcing Mutual TLS (mTLS)

API keys provide identification, not authentication. They are easily leaked and frequently hardcoded into client applications. To authenticate machine-to-machine communication reliably, we configured API Gateway to require mTLS.

With mTLS, the client validates the server's certificate, and the server simultaneously validates the client's certificate before establishing the TLS handshake. 

We uploaded a custom Certificate Authority (CA) trust store bundle to an Amazon S3 bucket. We then configured the custom domain name in API Gateway to use this trust store.

`ash
aws apigatewayv2 create-domain-name \
    --domain-name api.secure-service.internal \
    --domain-name-configurations EndpointType=REGIONAL,CertificateArn=arn:aws:acm:us-east-1:123456789012:certificate/xyz \
    --mutual-tls-authentication TruststoreUri=s3://truststore-bucket/truststore.pem
`

If a client attempts to connect without a valid client certificate signed by our internal CA, API Gateway terminates the connection at the edge. The request never reaches the Lambda function, preventing unauthenticated traffic from consuming compute resources and inflating billing.

## Restricting the API Gateway Invocation Role

By default, AWS SAM or the Serverless Framework grants API Gateway permission to invoke the Lambda function via resource-based policies attached to the function itself.

`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "apigateway.amazonaws.com"
      },
      "Action": "lambda:InvokeFunction",
      "Resource": "arn:aws:lambda:us-east-1:123456789012:function:ProcessPayment",
      "Condition": {
        "ArnLike": {
          "AWS:SourceArn": "arn:aws:execute-api:us-east-1:123456789012:api-id/*/*/*"
        }
      }
    }
  ]
}
`

We tightened the AWS:SourceArn condition to specify the exact HTTP method and route. If a developer accidentally misconfigures the gateway routing, the Lambda function rejects the invocation.

## Scoping Lambda Execution Roles

The most critical vulnerability in serverless environments occurs when Lambda execution roles possess overly broad permissions. If an attacker exploits an application vulnerability inside the Lambda function, they inherit the function's IAM role.

We audited the existing execution roles and removed all wildcard (*) resources. 

Before:
`json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:PutItem",
    "dynamodb:GetItem"
  ],
  "Resource": "*"
}
`

After:
`json
{
  "Effect": "Allow",
  "Action": [
    "dynamodb:PutItem",
    "dynamodb:GetItem"
  ],
  "Resource": "arn:aws:dynamodb:us-east-1:123456789012:table/ProductionPayments"
}
`

We also implemented iam:PassedToService restrictions and removed iam:PassRole entirely. A Lambda function designed to write to DynamoDB does not need permission to list S3 buckets or describe EC2 instances. 

Building a zero-trust serverless architecture requires treating every Lambda function as a distinct entity with its own minimal privilege boundary. When properly configured, a compromised function yields nothing beyond its immediate, narrow scope.
