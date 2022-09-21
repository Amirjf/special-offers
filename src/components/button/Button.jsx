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
    normal: 'px-8 py-2',
    large: 'px-8 py-3 text-lg',
  },
  variant: {
    primary:
      'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
    outlined:
      'border-1 border-black-500 text-black-500 hover:border-blue-500 hover:text-blue-500',
  },
  isActive: {
    outlined: 'border-blue-500 text-blue-500',
    primary: 'bg-blue-500',
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
                ${isActive && classes.isActive[variant]}
                ${fullWidth && classes.fullWidth}
            `)}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  )
);

export default Button;

// const Button = ({ children, icon, color, borderColor,isActive, ...props }) => {
//   console.log(color);

//   return (
//     <button
//       type="button"
//       class={`py-2 px-4 flex justify-center border-1 text-${color} border-${borderColor} items-center ${color} hover:${color} focus:ring-${color} w-full transition ease-in duration-200 text-center text-black focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xs`}
//       {...props}
//     >
//       <svg
//         width="20"
//         height="20"
//         fill="currentColor"
//         class="mr-2"
//         viewBox="0 0 1792 1792"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
//       </svg>
//       {children}
//     </button>
//   );
// };

// export default Button;
