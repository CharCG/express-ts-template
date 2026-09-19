import { ErrorRequestHandler } from 'express';
import { AppError } from '../shared/app-error.js';

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
      data: null,
    });

    return;
  }

  res.status(500).json({
    success: false,
    statusCode: 500,
    message: 'Internal Server Error',
    data: null,
  });
};
