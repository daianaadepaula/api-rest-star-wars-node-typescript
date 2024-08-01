import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { baseRoutes } from './base.route';

const router = Router();

router.use('/', baseRoutes);

router.post('/teste', (req, res) => {
	console.log(req.body);

	return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
