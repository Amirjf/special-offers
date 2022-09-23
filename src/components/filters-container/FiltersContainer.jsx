import React from 'react';
import BodyFilter from '../body-filter/BodyFilter';
import ModelFilter from '../model-filter/ModelFilter';
import TypeFilter from '../type-filter/TypeFilter';
import YearFilter from '../year-filter/YearFilter';

const FILTER_ITEMS = {
  type: <TypeFilter />,
  bodyStyle: <BodyFilter />,
  model: <ModelFilter />,
  year: <YearFilter />,
};

const FiltersContainer = ({ selectedFilter }) => {
  return (
    <div className="w-full max-h-[70vh] md:max-h-[42vh] mt-5 overflow-hidden overflow-y-auto px-2 border-b-1">
      {FILTER_ITEMS[selectedFilter]}
    </div>
  );
};

export default FiltersContainer;
