import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { history } from './shared/application/helpers/history';
import store from './shared/application/store';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<React.StrictMode>
			<Router history={history}>
				<App />
			</Router>
		</React.StrictMode>
	</Provider>,
);
