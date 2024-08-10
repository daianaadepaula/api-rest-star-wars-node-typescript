import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Planets - UpdateById', () => {
	it('Atualiza registro', async () => {
		const res1 = await testServer.post('/planets').send({
			nome: 'Mirial',
			clima: 'Frígido e seco',
			terreno: 'Deserto',
			populacao: 4.0058,
		});

		expect(res1.statusCode).toEqual(StatusCodes.CREATED);

		const resAtualizada = await testServer.put(`/planets/${res1.body}`).send({
			nome: 'Mirial',
			clima: 'Frígido',
			terreno: 'Deserto',
			populacao: 2000,
		});

		expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
	});

	it('Tenta atualizar registro que não existe', async () => {
		const res1 = await testServer.put('/planets/99999').send({
			nome: 'Caxia',
			clima: 'Frígido',
			terreno: 'Deserto',
			populacao: 2000,
		});

		expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
		expect(res1.body).toHaveProperty('errors.default');
	});
});
