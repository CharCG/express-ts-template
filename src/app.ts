import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { errorMiddleware } from './middlewares/error.middleware';
import { notFoundMiddleware } from './middlewares/not-found.middleware';

export const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
