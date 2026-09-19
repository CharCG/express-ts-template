# Express TypeScript Template

A minimal, production-ready backend template built with [Express 5](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/), [PostgreSQL](https://www.postgresql.org/), and [Prisma](https://www.prisma.io/) ORM with structured error handling, standardized response, and a clean modular layered architecture.

## Requirements

- [Node.js](https://nodejs.org/en) (v20 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/id/)
- PostgreSQL

## Getting Started

1. Clone the repository and install dependencies.

```bash
git clone https://github.com/charcg/express-ts-template.git
cd express-ts-template
npm install
```

2. Create the environment file.

```bash
cp .env.example .env
```

3. Configure `DATABASE_URL` in `.env`, then prepare the database.

```bash
npm run prisma:migrate -- --name init
```

4. Start the development server.

```bash
npm run dev
```

Once the server is running, you can access the API at `http://localhost:3000` by default.

## Project Structure

```text
├── prisma/
│   └── schema.prisma
├── src/
│   └── config/
│   └── middlewares/
│   └── modules/
│   └── routes/
│   └── shared/
│   └── app.ts
│   └── index.ts
├── package-lock.json
├── package.json
├── prisma.config.ts
└── tsconfig.json
```
