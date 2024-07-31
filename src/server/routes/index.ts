import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import packageJson from '../../../package.json';

const router = Router();

router.get('/', (_, res) => {
	const { name, version, description, author } = packageJson;

	res.status(200).json({ name, version, description, author });
});

router.post('/', (req, res) => {
	console.log(req.body);

	return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
