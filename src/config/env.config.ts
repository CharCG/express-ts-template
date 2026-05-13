import dotenv from 'dotenv';

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  IS_PRODUCTION: () => env.NODE_ENV === 'production',
  IS_DEVELOPMENT: () => env.NODE_ENV === 'development',
  IS_TESTING: () => env.NODE_ENV === 'testing',

  HOST: process.env.HOST || 'localhost',
  PORT: parseInt(process.env.PORT || '3000', 10),

  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/db',
} as const;
