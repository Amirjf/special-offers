import React from 'react';

const FilterContentHeading = ({ title }) => {
  return (
    <div className="font-semibold pb-4">
      <div className="pb-1">{title}</div>
      <hr className="w-1/4" />
    </div>
  );
};

export default FilterContentHeading;
