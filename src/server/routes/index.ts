import { Router } from 'express';
import { baseRoutes } from './base.route';

import { PlanetsController } from './../controllers';

const router = Router();

router.use('/', baseRoutes);

router.post(
	'/planets',
	PlanetsController.createValidation,
	PlanetsController.create,
);

export { router };
