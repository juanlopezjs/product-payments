import { Switch } from 'react-router-dom';
import productRouter from "../../domains/products/infrastructure/routing/router"
const routes = [productRouter];

const Router = () => {
	const defaultLayout = ({ children }) => <>{children}</>;

	return (
		<Switch>
			{routes.map((router) => {
				return router.router.map(({ path, page: Component, routeComponent: Route, exact = true, layout, ...rest }) => (
					<Route
						key={path}
						exact={exact}
						path={path}
						component={Component}
						layout={layout || router.layout || defaultLayout}
						{...rest}
					/>
				));
			})}
		</Switch>
	);
};

export default Router;
