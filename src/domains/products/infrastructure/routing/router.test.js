import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import DetailProduct from '../../presentation/pages/DetailProduct';
import { productRoute, successPaymentRoute } from './routes';
import ProductLayout from '../../../../shared/presentation/layouts/ProductLayout';
import SuccessPayment from '../../presentation/pages/SuccessPayment';
import productRouter from './router';

describe('productRouter', () => {
	test('should have correct routes defined', () => {
        const routes = productRouter.router;
		expect(routes).toHaveLength(2);

		const detailProductRoute = routes[0];
		expect(detailProductRoute.path).toEqual(productRoute());
		expect(detailProductRoute.page).toEqual(DetailProduct);
		expect(detailProductRoute.routeComponent).toEqual(UnauthenticatedRoute);
		expect(detailProductRoute.layout).toEqual(ProductLayout);

		const successPaymentRouteMock = routes[1];
		expect(successPaymentRouteMock.path).toEqual(successPaymentRoute());
		expect(successPaymentRouteMock.page).toEqual(SuccessPayment);
		expect(successPaymentRouteMock.routeComponent).toEqual(UnauthenticatedRoute);
	});
});
