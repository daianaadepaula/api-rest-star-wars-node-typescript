import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Planets - DeleteById', () => {
	it('Apaga registro', async () => {
		const res1 = await testServer.post('/planets').send({
			nome: 'Mirial',
			clima: 'Frígido e seco',
			terreno: 'Deserto',
			populacao: 4.0058,
		});

		expect(res1.statusCode).toEqual(StatusCodes.CREATED);

		const resApagada = await testServer.delete(`/planets/${res1.body}`).send();

		expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
	});

	it('Tenta apagar registro que não existe', async () => {
		const res1 = await testServer.delete('/planets/99999').send();

		expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
		expect(res1.body).toHaveProperty('errors.default');
	});
});
