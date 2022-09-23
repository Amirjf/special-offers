import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';

const AppliedFilterNumbers = () => {
  const { filters } = useContext(OffersContext);

  const numberOfFilters = Object.values(filters).flat().length;

  if (numberOfFilters) {
    return (
      <div className="bg-[#176db7] w-6 h-6 rounded-full flex items-center justify-center text-white">{`${numberOfFilters}`}</div>
    );
  }
};

export default AppliedFilterNumbers;
