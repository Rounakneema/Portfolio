# AGENTS.md — Global Repository Guidelines

## Project Framing & Commercial Boundaries (Mandatory Rule)

All agents and tools operating in this repository must adhere to the following invariant across all 8 showcase projects (`revealr`, `metromind`, `osa`, `sortmail`, `pipelineforge`, `devcontext`, `axiomos`, `dizzy`) and all portfolio domains:

1. **Origin & Engineering Showcase:**
   - Every project was created by Rounak Neema either for personal exploration/research or for clients/others as custom technical engineering solutions.
   - Frame every project strictly as an engineering project and showcase of technical capabilities (what problem it solves, architecture, throughput, reliability, and technical design).

2. **Not Turnkey Products for Sale:**
   - None of the projects are commercial SaaS software products intended for direct sale, turnkey consumer subscriptions, or self-serve checkout.
   - Never generate SaaS pricing tiers, consumer subscription cards ($/month), commercial buy-now buttons, or checkout flows.
   - Never present these projects as finished retail products looking for signups or paying retail users.

3. **Inquiry & "Interested in This" Email Intake:**
   - On every project site and footer, maintain an inline email intake option: "Interested in this project? Enter your email" (or direct link to `https://rounakneema.in/contact`).
   - Anyone interested in commissioning similar engineering, consulting, or codebase exploration can submit their email directly via the automated intake API.

4. **Deslop & Technical Writing Integrity:**
   - Ban generic AI filler words, em dashes (—), and buzzwords.
   - Use active voice, clear engineering metrics, and reader-centric second-person ("you") and first-person ("we"/"I") framing.
   - Maintain high typographic discipline and avoid slop patterns.

5. **Homepage Product Showcase vs. Architecture Pages Separation (Mandatory):**
   - **Homepage (Showcase like a product, but framed as an engineering project):**
     - Present each project on its homepage with product-like polish, compelling value propositions, visual UI mockups, interactive feature exploration, practical workflows, and email intake.
     - Frame it clearly as an engineering project created by Rounak Neema (research exploration or client consulting solution), not a commercial turnkey SaaS for sale (no pricing tiers, subscriptions, or retail checkout).
     - **Hide raw low-level technical dumps from the homepage:** Keep the homepage sleek, customer/recruiter-facing, and clean. Do not clutter the homepage with raw CLI terminal traces, verbose internal compiler logs, or low-level engine dumps.
   - **Technical & Architecture Subpages (`/architecture`, `/decisions`, `/docs`):**
     - All deep technological mechanics, low-level data flows, raw CLI session traces, benchmark evidence, AST specs, and engineering tradeoffs belong strictly on the dedicated Technical & Architecture subpages.
     - The homepage links cleanly to these subpages for engineers, recruiters, and clients who want deep technical proof.

6. **SEO-Optimized Searchable FAQs (Mandatory):**
   - Every project homepage must feature an extensive, high-intent FAQ section specifically optimized for SEO and AI search discovery.
   - Must include an interactive client-side search bar allowing visitors to instantly filter FAQ questions and answers by keyword.
   - All FAQ questions and answers must be serialized into Schema.org `FAQPage` JSON-LD structured data on the homepage to maximize Google Search rich snippet indexing and AI search engine (Perplexity, ChatGPT, Claude) citations.
