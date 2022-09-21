import React from 'react';

const Checkbox = ({ label, id, value, ...props }) => {
  return (
    <div class="flex items-center mb-2">
      <input
        id={id}
        type="checkbox"
        value={value}
        className="w-6 h-6 cursor-pointer text-blue-600 bg-gray-100 ring-offset-2 rounded border-gray-300 focus:ring-2 focus:ring-[#176db7]"
        {...props}
      />
      <label
        htmlFor={id}
        className="ml-2 text-md flex items-center text-gray-700 dark:text-gray-500 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
