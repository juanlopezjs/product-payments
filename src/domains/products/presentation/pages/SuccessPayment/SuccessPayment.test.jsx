import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SuccessPayment from './index';
import { useDispatch, useSelector } from 'react-redux';
import { describe, expect, test, vi } from 'vitest';
import { getPayment } from '../../../application/selectors/products';
import { setResetState } from '../../../application/slices/products';
import { history } from '../../../../../shared/application/helpers/history';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

vi.mock('../../../application/selectors/products', () => ({
  getPayment: vi.fn(),
}));

vi.mock('../../../application/slices/products', () => ({
  setResetState: vi.fn(),
}));

vi.mock('../../../../shared/application/helpers/history', () => ({
  history: {
    push: vi.fn(),
  },
}));

describe('SuccessPayment component', () => {
  const mockDispatch = vi.fn();
  const mockSelector = vi.fn();
  const mockGetPayment = vi.fn();
  const mockSetResetState = vi.fn();
  const mockHistoryPush = vi.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation(mockSelector);
    getPayment.mockImplementation(mockGetPayment);
    setResetState.mockImplementation(mockSetResetState);
    history.push = mockHistoryPush;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders success message and transaction id correctly', () => {
    const payment = { paymentId: '1234567890' };
    mockSelector.mockReturnValue(payment);
    const { getByText } = render(<SuccessPayment />);
    expect(getByText('Payment successfully')).toBeInTheDocument();
    expect(getByText(`transaction id ${payment.paymentId}`)).toBeInTheDocument();
  });

  test('calls dispatch with setResetState and redirects to random product on button click', () => {
    const { getByText } = render(<SuccessPayment />);
    fireEvent.click(getByText('View other product'));
    expect(mockDispatch).toHaveBeenCalledWith(mockSetResetState());
    expect(mockHistoryPush).toHaveBeenCalled();
  });
});