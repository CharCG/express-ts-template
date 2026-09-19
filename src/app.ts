import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { router } from './routes/index.js';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

export const app = express();

app.disable('x-powered-by');

app.use(helmet());
app.use(cors());

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    success: true,
    statusCode: 200,
    message: 'OK',
    data: null,
  });
});

app.use('/api', router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
