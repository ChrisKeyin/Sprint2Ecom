import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../src/components/ProductCard';

describe('ProductCard', () => {
  it('shows title, description and image', () => {
    render(
      <ProductCard
        title="King PC Tower i7"
        description="Performance beast"
        image="/Pics/KingPcI7.jpg"
        onViewDetails={() => {}}
      />
    );
    expect(screen.getByRole('heading', { name: /king pc tower i7/i }))
      .toBeInTheDocument();
    expect(screen.getByText(/performance beast/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/Pics/KingPcI7.jpg'
    );
  });

  it('calls onViewDetails when button clicked', async () => {
    const fn = vi.fn();
    render(
      <ProductCard
        title="King"
        description="desc"
        image="/img.jpg"
        onViewDetails={fn}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: /view details/i }));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
