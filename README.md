# Express TypeScript Template

A minimal, production-ready backend template built with [Express](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/), [PostgreSQL](https://www.postgresql.org/), and [Prisma](https://www.prisma.io/) ORM with structured error handling, consistent response formatting, and a clean layered architecture.

## Prerequisites

- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/id/)
- PostgreSQL

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/charcg/express-ts-template.git
cd express-ts-template
```

2. Install Dependencies

```bash
npm install
```

3. Configure Environment

```
NODE_ENV=
HOST=
PORT=
DATABASE_URL=
```

4. Setup Database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. Start Development Server

```bash
npm run dev
```

Once the server is running, you can access the API at `http://localhost:3000` by default.

## Project Structure

```
├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   ├── app.ts
│   └── index.ts
├── package-lock.json
├── package.json
├── prisma.config.ts
└── tsconfig.json
```

## Contribution

1. Fork the repository and clone it locally.
2. Create a new branch for your bug fix, feature, or documentation (e.g. `feat/<feature_name>`).
3. Make your changes and ensure the codebase remains clean and follows best practices.
4. Commit and push your changes with a conventional message (e.g. `feat: add <feature_name>`).
5. Submit a pull request with a clear description of the changes.
