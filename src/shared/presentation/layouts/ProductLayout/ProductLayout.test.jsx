import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductLayout from './index';

describe('ProductLayout', () => {
	test('renders children correctly', () => {
		render(
			<ProductLayout>
				<div>Child Component</div>
			</ProductLayout>,
		);

		expect(screen.getByText('Child Component')).toBeInTheDocument();
	});
});
