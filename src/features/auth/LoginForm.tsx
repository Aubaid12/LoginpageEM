import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { mockFetch } from '@/api/mockFetch';
import './LoginForm.css';

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email address';

        if (!password) newErrors.password = 'Password is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        if (!validate()) return;

        setIsLoading(true);
        try {
            const response = await mockFetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
            } else {
                // Handle API errors
                if (response.status === 400) {
                    setErrors({ email: data.message });
                } else if (response.status === 401) {
                    setErrors({ form: data.message });
                } else {
                    setErrors({ form: data.message || 'Something went wrong. Please try again.' });
                }
            }
        } catch (err: any) {
            setErrors({ form: err.message || 'Network error occurred' });
        } finally {
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="login-card success-state" aria-live="polite">
                <div className="success-icon">🎉</div>
                <h2>Welcome to Mars!</h2>
                <p>You have successfully logged in.</p>
                <Button onClick={() => setSuccess(false)} variant="secondary" style={{ marginTop: '1rem' }}>
                    Sign Out
                </Button>
            </div>
        );
    }

    return (
        <form className="login-card" onSubmit={handleSubmit} noValidate>
            <div className="login-header">
                <h1>Martian Login</h1>
                <p>Enter your credentials to access the colony.</p>
            </div>

            {errors.form && (
                <div className="error-alert" role="alert">
                    {errors.form}
                </div>
            )}

            <div className="login-body">
                <Input
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    error={errors.email}
                    autoComplete="email"
                    autoFocus
                />

                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    error={errors.password}
                    autoComplete="current-password"
                />

                <div className="form-actions">
                    {/* Forgot password could go here */}
                </div>

                <Button type="submit" isLoading={isLoading}>
                    Sign In
                </Button>
            </div>

            <div className="login-footer">
                <p>Don't have an account? <a href="#">Apply to join</a></p>
            </div>
        </form>
    );
};
