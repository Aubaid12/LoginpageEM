import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import type { Mock } from 'vitest';
import * as api from '@/api/mockFetch';

// Mock the api module
vi.mock('@/api/mockFetch', () => ({
    mockFetch: vi.fn(),
}));

describe('LoginForm', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it('renders login form with inputs', () => {
        render(<LoginForm />);
        expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
    });

    it('shows validation errors for empty submission', async () => {
        render(<LoginForm />);
        fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

        expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/Password is required/i)).toBeInTheDocument();
    });

    it('handles successful login', async () => {
        // Mock successful response
        (api.mockFetch as Mock).mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => ({ token: 'abc', user: { name: 'Test' } }),
        });

        render(<LoginForm />);

        // Fill form
        fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'demo@evilmartians.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });

        // Submit
        fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

        // Check success state
        await waitFor(() => {
            expect(screen.getByText(/Welcome to Mars!/i)).toBeInTheDocument();
        });
    });
});
