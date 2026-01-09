import React, { forwardRef } from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, id, className, ...props }, ref) => {
        // Generate fallback ID if not provided, for a11y association
        const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
        const errorId = `${inputId}-error`;

        return (
            <div className={`input-group ${className || ''} ${error ? 'has-error' : ''}`}>
                <label htmlFor={inputId} className="input-label">
                    {label}
                </label>
                <input
                    ref={ref}
                    id={inputId}
                    className="input-field"
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    {...props}
                />
                {error && (
                    <span id={errorId} className="input-error" role="alert">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);
