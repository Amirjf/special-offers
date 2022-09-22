import React from 'react';
import BodyFilter from '../body-filter/BodyFilter';
import ModelFilter from '../model-filter/ModelFilter';
import YearFilter from '../year-filter/YearFilter';

const FiltersContainer = ({ selectedFilter }) => {
  return (
    <div className="w-full max-h-[70vh] md:max-h-[42vh] mt-5 overflow-hidden overflow-y-auto px-2">
      {selectedFilter === 'bodyStyle' && <BodyFilter />}
      {selectedFilter === 'model' && <ModelFilter />}
      {selectedFilter === 'year' && <YearFilter />}
    </div>
  );
};

export default FiltersContainer;
