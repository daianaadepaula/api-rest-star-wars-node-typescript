import * as create from './Create';
import * as deleteById from './DeleteById';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './UpdateById';

export const PlanetsController = {
	...create,
	...getAll,
	...getById,
	...updateById,
	...deleteById,
};
