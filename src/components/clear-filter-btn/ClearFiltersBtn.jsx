import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';

const ClearFiltersBtn = () => {
  const { isAnyFilterApplied, offerData, setFilteredOffers, setFilters } =
    useContext(OffersContext);

  const handleClearingFilters = () => {
    window.history.pushState('', '', window.location.pathname);
    setFilteredOffers(offerData);
    setFilters({});
  };

  return (
    <>
      {isAnyFilterApplied() ? (
        <div className="text-primary flex items-center ml-5 sm:ml-0 font-semibold">
          <button onClick={handleClearingFilters}>Clear all</button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ClearFiltersBtn;
