import { Request, Response } from 'express';
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

export const create = async (req: Request<{}, {}, IPlanet>, res: Response) => {
	let validateData: IPlanet | undefined = undefined;

	try {
		validateData = await bodyValidation.validate(req.body, {
			abortEarly: false,
		});
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

	console.log(validateData);

	return res.send('Create!');
};
