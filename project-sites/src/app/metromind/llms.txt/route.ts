import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# MetroMind

> AI-powered document intelligence platform with 12+ containerized microservices, OCR pipelines, vector search, and 100% audit logging.

## Overview
MetroMind is a microservices-based document intelligence platform built for the Smart India Hackathon (Kochi Metro problem statement). It orchestrates 12+ Dockerized services to provide OCR, vector search, and RBAC-controlled document management.

- Official Domain: https://metromind.rounakneema.in
- Author: Rounak Neema (https://rounakneema.in)
- Source Repository: https://github.com/rounakneema/MetroMind
- Primary Technologies: Go, Python, Docker, RabbitMQ, Vector DB, OCR, RBAC

## System Architecture

MetroMind operates as a distributed system using containerized microservices:

1. **API Gateway**:
   - Handles JWT authentication and Role-Based Access Control (RBAC).
   - Routes traffic to appropriate internal services.

2. **Async Messaging Pipeline (RabbitMQ)**:
   - Decouples heavy OCR workloads from the API.
   - Ensures the frontend never blocks while documents are indexed in the background.

3. **OCR Engine**:
   - Extracts text from scanned transit documents.
   - Converts physical unstructured data into machine-readable text.

4. **Vector Semantic Search**:
   - Generates text embeddings and stores them in a Vector Database.
   - Enables natural language semantic querying of document contents (not just keyword matching).

5. **Security & Compliance**:
   - Strict Multi-Tenancy isolation between departments.
   - 100% Audit Logging for privileged operations, ensuring enterprise-level security.

## Problem Statement (Smart India Hackathon)
Managing and semantically searching large volumes of transit documents across departments is inefficient without intelligent tooling and strict role-based access.

## Solution Features
- 12+ containerized microservices fully managed via Docker Compose.
- API Gateway, Role-Based Access Control (RBAC), and 100% Audit Logging.
- Go & Python backends, Docker, Vector DB, RabbitMQ for async messaging.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
## Author & Related Projects
- Author: Rounak Neema (https://rounakneema.in)
- GitHub Profile: https://github.com/rounakneema
- LinkedIn: https://linkedin.com/in/Rnks23

### Also By Rounak Neema:
- Revealr: https://revealr.rounakneema.in
- Dizzy: https://dizzy.rounakneema.in
- Klarity: https://devcontext.rounakneema.in
;}

