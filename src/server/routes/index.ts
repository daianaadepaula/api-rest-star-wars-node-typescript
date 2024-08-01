import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { baseRoutes } from './base.route';

import { PlanetsController } from './../controllers';

const router = Router();

router.use('/', baseRoutes);

router.post('/planets', PlanetsController.create);

export { router };
