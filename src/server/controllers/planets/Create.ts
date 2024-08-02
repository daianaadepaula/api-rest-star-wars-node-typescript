import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface IPlanet {
	nome: string;
	clima: string;
	terreno: string;
	populacao: number;
}

const bodyValidation: yup.ObjectSchema<IPlanet> = yup.object().shape({
	nome: yup.string().required().min(3),
	clima: yup.string().required().min(3),
	terreno: yup.string().required().min(3),
	populacao: yup.number().required().positive().integer(),
});

export const createBodyValidator: RequestHandler = async (req, res, next) => {
	try {
		await bodyValidation.validate(req.body, {
			abortEarly: false,
		});
		return next();
	} catch (err) {
		const yupError = err as yup.ValidationError;
		const errors: Record<string, string> = {};

		yupError.inner.forEach((error) => {
			if (!error.path) return;
			errors[error.path] = error.message;
		});

		return res.status(StatusCodes.BAD_REQUEST).json({
			errors: errors,
		});
	}
};

interface IFilter {
	filter?: string;
}

const queryValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
	filter: yup.string().required().min(3),
});

export const createQueryValidator: RequestHandler = async (req, res, next) => {
	try {
		await queryValidation.validate(req.query, {
			abortEarly: false,
		});
		return next();
	} catch (err) {
		const yupError = err as yup.ValidationError;
		const errors: Record<string, string> = {};

		yupError.inner.forEach((error) => {
			if (!error.path) return;
			errors[error.path] = error.message;
		});

		return res.status(StatusCodes.BAD_REQUEST).json({
			errors: errors,
		});
	}
};

export const create = async (req: Request<{}, {}, IPlanet>, res: Response) => {
	console.log(req.body);

	return res.send('Create!');
};
