import { render, screen } from '@testing-library/react'; // Importing testing utilities for rendering components and querying the DOM
import userEvent from '@testing-library/user-event'; // Importing user event utilities for simulating user interactions
import ProductCard from '../src/components/ProductCard'; // Importing the ProductCard component to be tested

// Grouping tests for the ProductCard component
describe('ProductCard', () => {
  // Test case to verify that the title, description, and image are displayed correctly
  it('shows title, description and image', () => {
    // Rendering the ProductCard component with test props
    render(
      <ProductCard
        title="King PC Tower i7" // Test title
        description="Performance beast" // Test description
        image="/Pics/KingPcI7.jpg" // Test image path
        onViewDetails={() => {}} // Empty function for the onViewDetails prop
      />
    );

    // Asserting that the title is rendered as a heading
    expect(screen.getByRole('heading', { name: /king pc tower i7/i }))
      .toBeInTheDocument();

    // Asserting that the description is rendered as text
    expect(screen.getByText(/performance beast/i)).toBeInTheDocument();

    // Asserting that the image is rendered with the correct src attribute
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/Pics/KingPcI7.jpg'
    );
  });

  // Test case to verify that the onViewDetails function is called when the button is clicked
  it('calls onViewDetails when button clicked', async () => {
    const fn = vi.fn(); // Mock function to track calls to onViewDetails

    // Rendering the ProductCard component with test props
    render(
      <ProductCard
        title="King" // Test title
        description="desc" // Test description
        image="/img.jpg" // Test image path
        onViewDetails={fn} // Passing the mock function as the onViewDetails prop
      />
    );

    // Simulating a click on the "View Details" button
    await userEvent.click(screen.getByRole('button', { name: /view details/i }));

    // Asserting that the mock function was called exactly once
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
