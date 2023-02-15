import React from 'react';
import { ReactComponent as ChevLeft } from '../../assets/icons/chev-left.svg';

const MobileGoBackButton = ({ selectedFilter, handleSelectedFilter }) => {
  return (
    <button
      isActive={selectedFilter === 'model'}
      onClick={() => handleSelectedFilter('')}
      className="md:customHidden w-full flex text-blue-600 gap-x-3  items-center px-2 font-semibold text-lg border-b-2 border-b-blue-600 py-4"
    >
      <ChevLeft />
      Go back
    </button>
  );
};

export default MobileGoBackButton;
