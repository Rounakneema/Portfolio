---
title: "Exploiting Misconfigured Kubernetes RBAC: A Post-Mortem Walkthrough"
date: "2024-11-12"
tags: ["Kubernetes", "DevSecOps", "Penetration Testing"]
excerpt: "A technical breakdown of how an overprivileged ServiceAccount led to full cluster compromise, and the exact RBAC policies required to prevent it."
---

We recently audited a Kubernetes environment where a single misconfigured ServiceAccount allowed an attacker to escalate privileges and compromise the entire cluster. This happens frequently in production environments when development teams assign broad permissions to CI/CD service accounts or monitoring tools just to get them working.

The initial foothold occurred through a vulnerable web application running in a standard namespace. The application container executed a remote code execution (RCE) payload, granting the attacker a shell. While container compromise is bad, the blast radius should remain contained to that specific pod. In this case, it did not.

## The Privilege Escalation Vector

By default, Kubernetes mounts a ServiceAccount token into every pod at /var/run/secrets/kubernetes.io/serviceaccount/token. The attacker extracted this token and authenticated against the internal Kubernetes API server.

We ran a basic authorization check using the compromised token:

`ash
kubectl auth can-i --list --token=cat /var/run/secrets/kubernetes.io/serviceaccount/token
`

The output revealed a critical flaw: the pod's ServiceAccount possessed the create verb for the pods/exec resource across the entire cluster.

## Abusing pods/exec

With pods/exec permissions, an attacker can execute arbitrary commands inside any running pod in the namespace. If the namespace contains privileged pods, pods with hostPath mounts, or pods containing sensitive secrets in memory, the cluster is effectively compromised.

The attacker identified a pod running a cluster-autoscaler component, which inherently possessed broader permissions. They used the compromised token to exec into the autoscaler pod:

`ash
kubectl exec -it autoscaler-pod-1234 -- /bin/sh
`

From inside the autoscaler pod, they extracted its highly privileged token, granting them ClusterAdmin equivalents and total control over the node infrastructure.

## Remediation and Prevention

The fix requires strictly scoping RBAC roles and removing default token mounts where unnecessary. 

First, disable auto-mounting of ServiceAccount tokens on pods that do not interact with the Kubernetes API:

`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-web-app
spec:
  automountServiceAccountToken: false
  containers:
  - name: web
    image: nginx
`

Second, adhere strictly to the principle of least privilege when defining Roles and ClusterRoles. Never grant wildcard (*) verbs or resources unless absolutely required, and avoid granting pods/exec to application service accounts.

If a CI/CD pipeline requires deployment permissions, scope the Role to the specific namespace and explicitly list the required verbs (create, patch, update) for specific resources (deployments, services), excluding destructive or escalation-prone actions.

Automated auditing tools like Trivy or Checkov catch these misconfigurations during the CI pipeline. Integrating them prevents developers from committing dangerous RBAC manifests to the repository in the first place.
