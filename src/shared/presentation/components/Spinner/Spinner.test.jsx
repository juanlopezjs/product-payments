import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Spinner from './index';

describe('Spinner Component', () => {
	test('renders spinner correctly', () => {
		render(<Spinner />);
		const spinnerContainer = screen.getByTestId('spinner-container');
		const spinner = screen.getByTestId('spinner');

		expect(spinnerContainer).toBeInTheDocument();
		expect(spinner).toBeInTheDocument();
	});
});
