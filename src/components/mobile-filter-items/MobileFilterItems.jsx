import React from 'react';
import { ReactComponent as ChevRight } from '../../assets/icons/chev-right.svg';

const MobileFilterItems = ({ selectedFilter, handleSelectedFilter }) => {
  return (
    <>
      <div className="flex flex-col md:hidden">
        <button
          isActive={selectedFilter === 'BodyStyle'}
          onClick={() => handleSelectedFilter('BodyStyle')}
          className="flex justify-between items-center px-2 font-semibold text-lg border-b-1 py-4"
        >
          BodyStyle
          <span className="text-blue-500">
            <ChevRight />
          </span>
        </button>
        <button
          isActive={selectedFilter === 'model'}
          onClick={() => handleSelectedFilter('model')}
          className="flex justify-between items-center px-2 font-semibold text-lg border-b-1 py-4"
        >
          Model
          <span className="text-blue-500">
            <ChevRight />
          </span>
        </button>
        <button
          isActive={selectedFilter === 'year'}
          onClick={() => handleSelectedFilter('year')}
          className="flex justify-between items-center px-2 font-semibold text-lg border-b-1 py-4"
        >
          Year
          <span className="text-blue-500">
            <ChevRight />
          </span>
        </button>
      </div>
    </>
  );
};

export default MobileFilterItems;
