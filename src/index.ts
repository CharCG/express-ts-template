import { app } from './app.js';
import { env } from './config/env.config.js';
import { prisma } from './config/prisma.config.js';

const server = app.listen(env.PORT, () => {
  console.log(`Server listening on port ${env.PORT}`);
});

const shutdown = (signal: string) => {
  console.log(`${signal} received, shutting down`);
  server.close(() => {
    void prisma.$disconnect().finally(() => process.exit(0));
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
