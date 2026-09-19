import { RequestHandler } from 'express';
import { NotFoundError } from '../shared/app-error.js';

export const notFoundMiddleware: RequestHandler = (req) => {
  throw new NotFoundError(`Route ${req.originalUrl} not found`);
};
