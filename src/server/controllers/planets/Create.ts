import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface IPlanet {
	name: string;
}

const bodyValidation: yup.ObjectSchema<IPlanet> = yup.object().shape({
	name: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, IPlanet>, res: Response) => {
	let validateData: IPlanet | undefined = undefined;

	try {
		validateData = await bodyValidation.validate(req.body);
	} catch (error) {
		const yupError = error as yup.ValidationError;

		return res.json({
			errors: {
				default: yupError.message,
			},
		});
	}

	console.log(validateData);

	return res.send('Create!');
};
