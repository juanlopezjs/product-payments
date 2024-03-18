import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header layout Component', () => {
	test('renders header correctly', () => {
		render(<Header />);
		const headerContainer = screen.getByTestId('header-container');
		expect(headerContainer).toBeInTheDocument();
	});
});
