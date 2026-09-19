import { RequestHandler } from 'express';
import { ZodType } from 'zod';
import { BadRequestError } from '../shared/app-error.js';

export const validateMiddleware = (schema: ZodType): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!result.success) {
      throw new BadRequestError(result.error.issues[0]?.message ?? 'Invalid request');
    }

    next();
  };
};
