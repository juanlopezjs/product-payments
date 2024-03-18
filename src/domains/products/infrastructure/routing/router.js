import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import DetailProduct from '../../presentation/pages/DetailProduct';
import { productRoute, successPaymentRoute } from './routes';
import ProductLayout from '../../../../shared/presentation/layouts/ProductLayout';
import SuccessPayment from '../../presentation/pages/SuccessPayment';

const productRouter = {
	router: [
		{
			path: productRoute(),
			page: DetailProduct,
			routeComponent: UnauthenticatedRoute,
			layout: ProductLayout,
		},
		{
			path: successPaymentRoute(),
			page: SuccessPayment,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default productRouter;
