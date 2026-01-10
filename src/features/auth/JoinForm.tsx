import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { mockFetch } from '@/api/mockFetch';
import './LoginForm.css'; // Reusing login styles

interface JoinFormProps {
    onLoginClick: () => void;
}

export const JoinForm: React.FC<JoinFormProps> = ({ onLoginClick }) => {
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
        else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        if (!validate()) return;

        setIsLoading(true);
        try {
            const response = await mockFetch('/api/join', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
            } else {
                if (response.status === 400) {
                    // Handle both email and password errors simply
                    if (data.message.includes('password')) {
                        setErrors({ password: data.message });
                    } else {
                        setErrors({ email: data.message });
                    }
                } else {
                    setErrors({ form: data.message || 'Something went wrong.' });
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
                <h2>Welcome!</h2>
                <p>Your account has been created.</p>
                <Button onClick={onLoginClick} variant="secondary" style={{ marginTop: '1rem' }}>
                    Go to Login
                </Button>
            </div>
        );
    }

    return (
        <form className="login-card" onSubmit={handleSubmit} noValidate>
            <div className="login-header">
                <h1>Join</h1>
                <p>Create your account.</p>
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
                    autoComplete="new-password"
                />

                <Button type="submit" isLoading={isLoading}>
                    Join
                </Button>
            </div>

            <div className="login-footer">
                <p>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>Login</a></p>
            </div>
        </form>
    );
};
