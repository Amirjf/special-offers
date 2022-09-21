import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="w-[94%] md:w-[90%] mx-auto max-w-[1220px]">{children}</div>
  );
};

export default Container;
