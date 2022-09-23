import React, { useContext } from 'react';
import Button from '../button/Button';
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
        <div>
          <Button variant="text" fullWidth onClick={handleClearingFilters}>
            Clear filters
          </Button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ClearFiltersBtn;
