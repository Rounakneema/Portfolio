# Portfolio & Engineering Logs Monorepo

This repository hosts the personal portfolio and engineering blog for **Rounak Neema**, consolidated into a monorepo architecture.

## 🏗️ Architecture

The project is structured as a **Go-powered Serverless Application** deployed on Vercel.

*   **`professional_portfolio/`**: Main Portfolio site. Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.
*   **`blog/`**: Engineering Logs. Built with **Next.js** (Static Export) and **Tailwind CSS**.
*   **`api/`**: **Go Backend**. Serves both the portfolio (as a SPA) and the blog (as static files) using `//go:embed`.

## 🚀 Deployment (Vercel)

This project is configured to deploy on Vercel using the **Go Runtime**.

### Configuration
*   **Build Command**: `cd professional_portfolio && npm run vercel-build`
    *   *Builds both frontend apps and moves assets to `api/static`.*
*   **Output Directory**: `professional_portfolio/dist`
*   **Root Directory**: `.`

### Routing
All traffic is routed to `api/index.go` via `vercel.json`. The Go handler determines whether to serve the Blog or the Portfolio based on the request path.

## 🛠️ Local Development

1.  **Frontend**:
    *   Portfolio: `cd professional_portfolio && npm run dev`
    *   Blog: `cd blog && npm run dev`

2.  **Full Stack (Simulation)**:
    *   Build everything: `cd professional_portfolio && npm run vercel-build`
    *   Run Go Server: `go run api/index.go` (Requires slight modification to run locally without Vercel's env, or use `vercel dev`).

## 📜 License
[MIT](LICENSE)