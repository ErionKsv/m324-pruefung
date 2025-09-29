import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header';

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Einkaufsliste App/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Neue Liste erstellen/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Liste beitreten/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Einkaufsliste anzeigen/i })).toBeInTheDocument();
  });
});


