import { Request, Response, NextFunction } from 'express';
import { ZodObject } from 'zod';

type Target = 'body' | 'query' | 'params';

export const validateMiddleware =
  (schema: ZodObject, target: Target) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req[target]);
      next();
    } catch (err) {
      next(err);
    }
  };
