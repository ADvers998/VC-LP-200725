import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HeroSection } from '../HeroSection';

// Mock fetch for API calls
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation((url: string) => {
    if (url === '/api/interest-count') {
      return Promise.resolve({
        json: () => Promise.resolve({ success: true, data: { count: 42 } }),
      });
    }
    if (url === '/api/submit-interest') {
      return Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      });
    }
    return Promise.reject(new Error('Unknown endpoint'));
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('HeroSection', () => {
  it('renders headline and counter', async () => {
    render(<HeroSection />);
    expect(screen.getByText(/Launch Your MVP with/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(
        screen.getByText(/people have already signed up/i)
      ).toBeInTheDocument();
      expect(screen.getByText('42')).toBeInTheDocument();
    });
  });

  it('shows validation errors for empty form', async () => {
    render(<HeroSection />);
    fireEvent.click(screen.getByRole('button', { name: /join the waitlist/i }));
    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
  });

  it('shows validation error for invalid email', async () => {
    render(<HeroSection />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.click(screen.getByRole('button', { name: /join the waitlist/i }));
    expect(await screen.findByText(/valid email address/i)).toBeInTheDocument();
  });

  it('submits form successfully', async () => {
    render(<HeroSection />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: /join the waitlist/i }));
    expect(
      await screen.findByText(/thank you for your interest/i)
    ).toBeInTheDocument();
  });
});
