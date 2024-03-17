import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { UnauthenticatedRoute } from './redirect-route';
import { homeRoute } from '../infrastructure/routing/routes';

describe('UnauthenticatedRoute', () => {
  it('renders the component if user is not authenticated', () => {
    
    const FakeComponent = () => <div data-testid="fake-component">Fake Component</div>;
    const FakeLayout = ({ children }) => <div data-testid="fake-layout">{children}</div>;

    render(
      <MemoryRouter initialEntries={['/unauthenticated']}>
        <UnauthenticatedRoute path="/unauthenticated" component={FakeComponent} layout={FakeLayout} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('fake-component')).toBeInTheDocument();
    expect(screen.getByTestId('fake-layout')).toBeInTheDocument();
  });

  it('redirects to previous path or home route if user is authenticated', () => {
    // Simulamos un usuario autenticado
    localStorage.setItem('user', 'authenticated');
    localStorage.setItem('prevPath', '/previous');

    const FakeComponent = () => <div data-testid="fake-component">Fake Component</div>;
    const FakeLayout = ({ children }) => <div data-testid="fake-layout">{children}</div>;

    render(
      <MemoryRouter initialEntries={['/unauthenticated']}>
        <UnauthenticatedRoute path="/unauthenticated" component={FakeComponent} layout={FakeLayout} />
        <Route path={homeRoute} render={() => <div data-testid="home-route">Home Route</div>} />
      </MemoryRouter>
    );

    expect(screen.queryByTestId('fake-component')).not.toBeInTheDocument();
    expect(screen.queryByTestId('fake-layout')).not.toBeInTheDocument();
    expect(screen.getByTestId('home-route')).toBeInTheDocument();
  });
});