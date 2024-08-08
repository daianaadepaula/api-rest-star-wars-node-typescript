import { Request, Response } from 'express';
import * as yup from 'yup';

import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';

interface IPlanet {
	nome: string;
	clima: string;
	terreno: string;
	populacao: number;
}

export const createValidation = validation((getSchema) => ({
	body: getSchema<IPlanet>(
		yup.object().shape({
			nome: yup.string().required().min(3),
			clima: yup.string().required().min(3),
			terreno: yup.string().required().min(3),
			populacao: yup.number().required().positive().integer(),
		}),
	),
}));

export const create = async (req: Request<{}, {}, IPlanet>, res: Response) => {
	console.log(req.body);

	return res.status(StatusCodes.CREATED).json(1);
};
