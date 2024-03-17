import React, { useDebugValue } from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import InfoProduct from './index';

describe('InfoProduct component', () => {
  const mockProps = {
    title: 'Product Title',
    description: 'Product Description',
    price: 19.99,
  };

	test('renders title, description, and price correctly', () => {
    render(<InfoProduct {...mockProps} />);

		expect(screen.getByText(mockProps.title)).toBeInTheDocument();
		expect(screen.getByText(mockProps.description)).toBeInTheDocument();
		expect(screen.getByText('$19.99')).toBeInTheDocument();
  });
});
