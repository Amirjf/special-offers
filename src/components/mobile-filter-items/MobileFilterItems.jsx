import React from 'react';
import { ReactComponent as ChevRight } from '../../assets/icons/chev-right.svg';
import { FILTERS } from '../../utils/constants';

const MobileFilterItems = ({ selectedFilter, handleSelectedFilter }) => {
  return (
    <>
      <div className="flex flex-col md:hidden">
        {FILTERS.map((filterItem) => (
          <button
            isActive={selectedFilter === filterItem.value}
            onClick={() => handleSelectedFilter(filterItem.value)}
            className="flex justify-between items-center px-2 font-semibold text-lg border-b-1 py-4"
          >
            {filterItem.name}
            <span className="text-blue-500">
              <ChevRight />
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default MobileFilterItems;
