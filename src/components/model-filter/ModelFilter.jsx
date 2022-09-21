import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import Checkbox from '../checkbox/Checkbox';
import FilterContentHeading from '../filter-content-heading/FilterContentHeading';

const ModelFilter = () => {
  const { filters, filteredOffers, addFilters, removeFilters } =
    useContext(OffersContext);

  const handleChange = (event) => {
    if (event.target.checked) {
      addFilters({ key: 'model', value: event.target.value });
    } else {
      removeFilters({ key: 'model', value: event.target.value });
    }
  };

  const getModels = filteredOffers.map((offer) => offer.model);
  return (
    <div>
      <FilterContentHeading title="Model" />
      <div className="grid grid-cols-3">
        {getModels.map((model, idx) => {
          return (
            <div key={idx} className="pb-2">
              <Checkbox
                onChange={handleChange}
                label={model}
                id={model}
                name={model}
                value={model}
                checked={filters['model']?.includes(model) ? true : false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModelFilter;
