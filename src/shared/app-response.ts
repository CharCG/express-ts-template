import { Response } from 'express';

export function success<T>(res: Response, data: T, message = 'Success', statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    data,
  });
}
