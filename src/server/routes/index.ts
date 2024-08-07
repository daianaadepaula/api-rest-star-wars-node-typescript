import { Router } from 'express';
import { PlanetsController } from './../controllers';
import { baseRoutes } from './base.route';

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

router.get(
	'/planets/:id',
	PlanetsController.getByIdValidation,
	PlanetsController.getById,
);

router.put(
	'/planets/:id',
	PlanetsController.updateByIdValidation,
	PlanetsController.updateById,
);

router.delete(
	'/planets/:id',
	PlanetsController.deleteByIdValidation,
	PlanetsController.deleteById,
);

export { router };
