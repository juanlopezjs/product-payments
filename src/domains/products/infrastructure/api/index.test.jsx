import { getFetchProductById } from './index';

describe('getFetchProductById', () => {
	test('should fetch product by id', async () => {
		const id = 1;
		const product = await getFetchProductById(id);

		expect(product.id).toEqual(1);
	});
});
