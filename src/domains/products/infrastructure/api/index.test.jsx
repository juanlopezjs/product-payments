import { getFetchProductById } from './index';

describe('getFetchProductById', () => {
	it('should fetch product by id', async () => {
		const id = 1;
		const product = await getFetchProductById(id);

		expect(product.id).toEqual(1);
	});
});
