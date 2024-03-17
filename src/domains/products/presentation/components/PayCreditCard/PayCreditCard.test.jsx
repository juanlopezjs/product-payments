import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PayCreditCard from './index';

const mockStore = configureStore([]);
const initialState = {
  products: {
    showModalCredit: true, 
    payment: {},
  },
};

let store;

beforeEach(() => {
    store = mockStore(initialState);
});
  

describe('PayCreditCard component', () => {
    test('renders PayCreditCard component with modal open', () => {
      render(
        <Provider store={store}>
          <PayCreditCard />
        </Provider>
      );
  
      expect(screen.getByTestId('pay-credit-container')).toBeInTheDocument();
      expect(screen.getByTestId('form-container')).toBeInTheDocument();
    });
  });