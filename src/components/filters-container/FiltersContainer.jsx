import React from 'react';
import BodyFilter from '../body-filter/BodyFilter';
import ModelFilter from '../model-filter/ModelFilter';
import YearFilter from '../year-filter/YearFilter';

const FiltersContainer = ({ selectedFilter }) => {
  return (
    <div className="w-full h-80 border-2 border-red-500 mt-5">
      {selectedFilter === 'bodyStyle' && <BodyFilter />}
      {selectedFilter === 'model' && <ModelFilter />}
      {selectedFilter === 'year' && <YearFilter />}
    </div>
  );
};

export default FiltersContainer;
