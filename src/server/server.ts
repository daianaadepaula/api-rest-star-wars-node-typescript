import express, { json } from 'express';
import { router } from './routes';

const server = express();

server.use(json());
server.use(router);

export { server };
