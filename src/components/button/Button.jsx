import React, { forwardRef } from 'react';

export const cls = (input) =>
  input
    .replace(/\s+/gm, ' ')
    .split(' ')
    .filter((cond) => typeof cond === 'string')
    .join(' ')
    .trim();

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300 flex items-center justify-center',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-full',
  fullWidth: 'w-full',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-10 py-2',
    large: 'px-5 py-3 text-md',
  },
  variant: {
    primary:
      'bg-[#176db7] hover:bg-blue-800 focus:ring-2 focus:ring-[#176db7] focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
    outlined:
      'border-1  border-gray-400 font-semibold hover:border-[#176db7] hover:text-[#176db7]',
  },
  isActive: {
    outlined: 'bg-[#176db7] text-white hover:bg-blue-400',
    primary: 'bg-[#176db7]',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
};

const Button = forwardRef(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill,
      disabled = false,
      icon,
      isActive = false,
      fullWidth = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
      ${classes.base}
      ${classes.size[size]}
      ${classes.variant[variant]}
      ${pill && classes.pill}
      ${disabled && classes.disabled}
      ${className}
      ${fullWidth && classes.fullWidth}
      ${isActive && classes.isActive[variant]}
            `)}
      {...props}
    >
      {icon && <span>{icon}</span>}

      <span>{children}</span>
    </button>
  )
);

export default Button;
