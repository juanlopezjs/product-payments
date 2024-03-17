import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormPayCredit from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const initialState = {
	products: {
		payment: {},
	},
};

let store;

beforeEach(() => {
	store = mockStore(initialState);
});

test('renders FormPayCredit component', () => {
	render(
		<Provider store={store}>
			<FormPayCredit />
		</Provider>,
	);
	const formContainer = screen.getByTestId('form-container');
	expect(formContainer).toBeInTheDocument();
});
