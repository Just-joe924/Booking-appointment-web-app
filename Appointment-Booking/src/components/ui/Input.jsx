import React from 'react';

const Input = React.forwardRef(({ type = 'text', placeholder, value, onChange, className = '', ...props }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        />
    );
});

Input.displayName = 'Input';

export default Input;