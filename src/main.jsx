import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Router } from 'react-router-dom';
import { history } from './shared/application/helpers/history';
import { store, persistor } from './shared/application/store';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<React.StrictMode>
				<Router history={history}>
					<App />
				</Router>
			</React.StrictMode>
		</PersistGate>
	</Provider>,
);
