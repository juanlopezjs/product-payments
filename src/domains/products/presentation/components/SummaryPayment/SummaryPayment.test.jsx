import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SummaryPayment from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setLoader } from '../../../application/slices/products';

const mockStore = configureStore([]);

describe('SummaryPayment', () => {
	test('renders SummaryPayment correctly', () => {
		const store = mockStore({
			products: {
				showModalSummary: true,
				payment: { title: 'Test Product', cardName: 'John Doe', price: 10 },
			},
		});

		render(
			<Provider store={store}>
				<SummaryPayment />
			</Provider>,
		);

		expect(screen.getByText('Confirm Payment')).toBeInTheDocument();
		expect(screen.getByText('Review details of this transaction and hit Confirm to proceed')).toBeInTheDocument();
		expect(screen.getByText('Test Product')).toBeInTheDocument();
		expect(screen.getByText('John Doe')).toBeInTheDocument();
		expect(screen.getByText('Confirm')).toBeInTheDocument();
	});

	test('dispatches correct action on confirm button click', async() => {
		const store = mockStore({
			products: {
				showModalSummary: true,
				payment: { title: 'Test Product', cardName: 'John Doe', price: 10 },
			},
		});

		render(
			<Provider store={store}>
				<SummaryPayment />
			</Provider>,
		);

        fireEvent.click(screen.getByText('Confirm'));
        await waitFor(() => {
            const actions = store.getActions();
            expect(actions).toHaveLength(1);
            expect(actions[0]).toEqual(store.dispatch(setLoader(true)));
        });
	});
});
