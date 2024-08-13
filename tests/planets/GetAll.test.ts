import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';

describe('Planets - GetAll', () => {
	it('Buscar todos os registros', async () => {
		const res1 = await testServer.post('/planets').send({
			nome: 'Mirial',
			clima: 'Frígido e seco',
			terreno: 'Deserto',
			populacao: 4.0058,
		});

		expect(res1.statusCode).toEqual(StatusCodes.CREATED);

		const resBuscada = await testServer.get('/planets').send();

		expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
		expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
		expect(resBuscada.body.length).toBeGreaterThan(0);
	});
});
