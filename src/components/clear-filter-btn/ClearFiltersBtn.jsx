import React, { useState, useContext } from 'react';
import Button from '../button/Button';
import { OffersContext } from '../../context/OffersContext';

const ClearFiltersBtn = () => {
  const {
    isAnyFilterApplied,
    filters,
    offerData,
    setFilteredOffers,
    setFilters,
  } = useContext(OffersContext);
  const handleClearingFilters = () => {
    setFilteredOffers(offerData);
    setFilters({});
  };

  return (
    <>
      {isAnyFilterApplied() ? (
        <div>
          <Button variant="secondary" fullWidth onClick={handleClearingFilters}>
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