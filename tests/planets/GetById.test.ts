import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Planets - GetById', () => {
	it('Busca registro por id', async () => {
		const res1 = await testServer.post('/planets').send({
			nome: 'Abafar',
			clima: 'Quente',
			terreno: 'baldios sem fim e cobertos de sal',
			populacao: 300,
		});

		expect(res1.statusCode).toEqual(StatusCodes.CREATED);

		const resBuscada = await testServer.get(`/planets/${res1.body}`).send();

		expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
		expect(resBuscada.body).toHaveProperty('nome, clima, terreno, populacao');
	});

	it('Tenta buscar registro que não existe', async () => {
		const res1 = await testServer.get('/planets/99999').send();

		expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
		expect(res1.body).toHaveProperty('errors.default');
	});
});
