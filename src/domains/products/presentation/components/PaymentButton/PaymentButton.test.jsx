import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PaymentButton from './index';
import { setPayment, setShowModalCredit } from '../../../application/slices/products';

const mockStore = configureStore([]);

describe('PaymentButton component', () => {
	let store;

	beforeEach(() => {
		store = mockStore({});
	});

	test('should dispatch setPayment and setShowModalCredit actions when button is clicked', () => {
		const productId = 1;
		const title = 'Test Product';
		const price = 10.99;

		render(
			<Provider store={store}>
				<PaymentButton productId={productId} title={title} price={price} />
			</Provider>,
		);

		fireEvent.click(screen.getByText('Pay with credit card'));

		const actions = store.getActions();
		expect(actions).toHaveLength(2);
		expect(actions[0]).toEqual(store.dispatch(setPayment({ productId, title, price })));
		expect(actions[1]).toEqual(store.dispatch(setShowModalCredit(true)));
	});
});
