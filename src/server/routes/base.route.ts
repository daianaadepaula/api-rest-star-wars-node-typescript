import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import packageJson from '../../../package.json';

const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
	const { name, version, description, author } = packageJson;

	res.status(StatusCodes.ACCEPTED).json({ name, version, description, author });
});

export { baseRoutes };
