import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import DetailProduct from './index';
import { store } from '../../../../../shared/application/store';

describe('DetailProduct', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	test('should render product details when loaded', async () => {
		render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/products/1']}>
					<Route path="/products/:id">
						<DetailProduct />
					</Route>
				</MemoryRouter>
			</Provider>,
		);

		await waitFor(() => {
			expect(screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
			expect(screen.getByText('$109.95')).toBeInTheDocument();
			expect(screen.getByAltText('Product Image')).toBeInTheDocument();
		});
	});

	test('should render loading spinner while fetching product', async () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<MemoryRouter initialEntries={['/products/1']}>
					<Route path="/products/:id">
						<DetailProduct />
					</Route>
				</MemoryRouter>
			</Provider>,
		);

		expect(getByTestId('spinner')).toBeInTheDocument();
	});
});
