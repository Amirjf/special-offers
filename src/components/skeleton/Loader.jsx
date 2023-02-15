import React from 'react';

const Loader = () => {
  return (
    <div className="mx-auto bg-white py-4 w-96 border-[1px]">
      <div className="h-48 p-3 overflow-hidden"></div>

      <div className="mt-2 flex flex-col gap-3">
        <div className="h-6 mt-4 mb-6 w-4/5  mx-auto bg-gray-200 rounded"></div>
        <div className="h-6 w-1/2 mx-auto bg-gray-200 rounded"></div>
        <div className="h-3 w-1/2 mx-auto bg-gray-200 rounded"></div>
        <div className="h-3 w-2/3 mb-4 mx-auto bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default Loader;
