import { fireEvent } from '@testing-library/react';
import React from 'react';

import IndexPage from '../../pages';
import { eventsMock } from '../__mocks__/eventsMock';
import { render, screen } from '../testUtils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Index Page', () => {
  it('has heading and New button', () => {
    render(<IndexPage events={[]} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Events');
    expect(screen.getByRole('button', { name: /new/i })).toBeInTheDocument();
  });

  it('renders empty list', () => {
    render(<IndexPage events={[]} />);

    expect(screen.getByText(/no events so far./i)).toBeInTheDocument();
  });

  it('renders a list of given events', () => {
    render(<IndexPage events={eventsMock} />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  it('clicking New button navigates to Add page', () => {
    const router = { push: jest.fn() };

    useRouter.mockReturnValue(router);
    render(<IndexPage events={[]} />);
    fireEvent.click(screen.getByRole('button', { name: /new/i }));
    expect(router.push).toHaveBeenCalledWith('/add');
  });
});
