import { Router } from 'express';
import { baseRoutes } from './base.route';

import { PlanetsController } from './../controllers';

const router = Router();

router.use('/', baseRoutes);

router.get(
	'/planets',
	PlanetsController.getAllValidation,
	PlanetsController.getAll,
);

router.post(
	'/planets',
	PlanetsController.createValidation,
	PlanetsController.create,
);

export { router };
