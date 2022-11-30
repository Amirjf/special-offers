import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import Checkbox from '../checkbox/Checkbox';
import FilterContentHeading from '../filter-content-heading/FilterContentHeading';

const BodyFilter = () => {
  const { filters, filteredOffers, addFilters, removeFilters } =
    useContext(OffersContext);

  const handleChange = (event) => {
    if (event.target.checked) {
      addFilters({ key: 'body', value: event.target.value });
    } else {
      removeFilters({ key: 'body', value: event.target.value });
    }
  };

  const getBodyStyles = [
    ...new Set(filteredOffers.map((offer) => offer.body_style).filter(Boolean)),
  ];

  return (
    <div>
      <FilterContentHeading title="Body Styles" />
      <div className="grid grid-cols-2 md:grid-cols-3">
        {getBodyStyles.map((body, idx) => {
          if (body) {
            return (
              <div key={idx} className="pb-2">
                <Checkbox
                  onChange={handleChange}
                  label={body}
                  id={body}
                  name={body}
                  value={body}
                  checked={filters['body']?.includes(body) ? true : false}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BodyFilter;
