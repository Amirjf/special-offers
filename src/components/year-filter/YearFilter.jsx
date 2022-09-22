import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import Checkbox from '../checkbox/Checkbox';
import FilterContentHeading from '../filter-content-heading/FilterContentHeading';

const YearFilter = () => {
  const { filters, filteredOffers, addFilters, removeFilters } =
    useContext(OffersContext);

  const handleChange = (event) => {
    if (event.target.checked) {
      addFilters({ key: 'year', value: event.target.value });
    } else {
      removeFilters({ key: 'year', value: event.target.value });
    }
  };

  const getYears = [...new Set(filteredOffers.map((offer) => offer.year))];

  return (
    <div>
      <FilterContentHeading title="Year" />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {getYears.map((year, idx) => {
          const yearVal = year.toString();
          return (
            <div key={idx} className="pb-2">
              <Checkbox
                onChange={handleChange}
                label={yearVal}
                id={yearVal}
                name={yearVal}
                value={yearVal}
                checked={filters['year']?.includes(yearVal) ? true : false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YearFilter;
