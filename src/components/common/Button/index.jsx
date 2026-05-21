import React from 'react';
import './Button.css';

const Button = (props) => {
  const { 
    children, 
    variant = 'primary', 
    onClick, 
    type = 'button',
    fullWidth = false,
    disabled = false 
  } = props;

  const variants = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    outline: 'button--outline',
  };

  const buttonClassName = [
    'button',
    variants[variant],
    fullWidth ? 'button--full-width' : '',
    disabled ? 'button--disabled' : 'button--enabled',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}

export default Button;
