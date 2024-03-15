import { UnauthenticatedRoute } from '../../../../shared/presentation/redirect-route';
import DetailProduct from '../../presentation/pages/DetailProduct';
import { productRoute } from './routes';
import ProductLayout from '../../../../shared/presentation/layouts/ProductLayout';

const productRouter = {
	layout: ProductLayout,
	router: [
		{
			path: productRoute(),
			page: DetailProduct,
			routeComponent: UnauthenticatedRoute,
		},
	],
};

export default productRouter;
