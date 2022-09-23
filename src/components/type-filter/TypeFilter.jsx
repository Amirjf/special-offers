import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import Checkbox from '../checkbox/Checkbox';
import FilterContentHeading from '../filter-content-heading/FilterContentHeading';

const TypeFilter = () => {
  const { filters, filteredOffers, addFilters, removeFilters } =
    useContext(OffersContext);

  const handleChange = (event) => {
    if (event.target.checked) {
      addFilters({ key: 'type', value: event.target.value });
    } else {
      removeFilters({ key: 'type', value: event.target.value });
    }
  };

  const getTypes = [...new Set(filteredOffers.map((offer) => offer.type))];

  return (
    <div>
      <FilterContentHeading title="Car Types" />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {getTypes.map((carType, idx) => {
          if (carType) {
            return (
              <div key={idx} className="pb-2">
                <Checkbox
                  onChange={handleChange}
                  label={carType.toUpperCase()}
                  id={carType}
                  name={carType}
                  value={carType}
                  checked={filters['type']?.includes(carType) ? true : false}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TypeFilter;
