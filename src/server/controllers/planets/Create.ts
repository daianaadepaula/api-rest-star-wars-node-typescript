import { Request, Response } from 'express';

interface IPlanet {
	nome: string;
}

export const create = (req: Request<{}, {}, IPlanet>, res: Response) => {
	console.log(req.body.nome);

	return res.send('Create!');
};
