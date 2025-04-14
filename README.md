# 🧠 Gemini RAG Chatbot – Project Architecture Documentation

This project is a production-ready chatbot system powered by **RAG (Retrieval-Augmented Generation)** and **Google's Gemini LLM**, designed for scalability, modularity, and fast iteration using a monorepo structure.

---

## 📁 Monorepo Structure

```
chatbot-rag-gemini/
├── apps/
│   ├── frontend/           # Angular or React app (user interface)
│   ├── backend/            # Express / NestJS API server
│   └── worker/             # Background processor (e.g., for embeddings)
│
├── packages/
│   ├── core/               # RAG orchestration logic
│   ├── llm/                # Gemini API wrapper & prompt logic
│   ├── retriever/          # Vector DB abstraction (Qdrant, Pinecone, etc.)
│   ├── utils/              # Logging, errors, helpers
│   └── schema/             # Zod/Joi schemas, shared types/interfaces
│
├── infra/
│   ├── terraform/          # GCP setup (optional)
│   ├── docker/             # Dockerfiles for services
│   └── deploy-scripts/     # CI/CD scripts and k8s manifests
│
├── docker-compose.yml      # Local dev setup
├── turborepo.json / nx.json
├── .env
└── README.md
```

---

## 🛠️ Tech Stack

### Core Stack

| Layer          | Tech                                  |
|----------------|----------------------------------------|
| Frontend       | Angular / React                        |
| Backend        | Node.js (Express / NestJS)             |
| Vector DB      | Qdrant / Pinecone / Weaviate           |
| LLM            | Gemini Pro / Pro Vision (via API)      |
| Database       | MongoDB / Firestore                    |
| Auth           | Firebase Auth / Auth0 / Custom JWT     |
| Background Job | Worker + Redis Queue / Cloud Tasks     |

---

## 💡 Monorepo Tooling

| Tool       | Purpose                         |
|------------|----------------------------------|
| pnpm       | Dependency & workspace manager   |
| Turborepo  | Monorepo build system            |
| ESLint     | Code linting                     |
| Prettier   | Code formatting                  |
| Husky      | Git hooks                        |
| Jest / Vitest | Unit testing                  |
| Docker     | Containerization                 |

---

## 🧱 Component Responsibilities

... [TRUNCATED HERE for brevity, will use the full content in actual file]

---

## 📞 Need Help?

You can ping the architect (that's you) or consult the README inside each `app/` and `package/` for additional details.

Happy hacking! 🧑‍💻🧠