import React, { useState, useContext } from 'react';
import Button from '../button/Button';
import { OffersContext } from '../../context/OffersContext';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as XIcon } from '../../assets/icons/x.svg';
import ClearFiltersBtn from '../clear-filter-btn/ClearFiltersBtn';
import AppliedFilters from '../applied-filters/AppliedFilters';
import FilterContent from '../filter-content/FilterContent';

const Filters = () => {
  const {
    isAnyFilterApplied,
    filters,
    offerData,
    setFilteredOffers,
    setOnFiltersApplied,
    handleApplyingFilters,
  } = useContext(OffersContext);

  const [showFilters, setShowFilters] = useState(false);

  const handleShowFilterDrawer = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="sticky top-0 py-5 bg-white">
      <div className="flex gap-5 mb-0 md:mb-5">
        <div>
          <Button
            variant="outlined"
            icon={<FilterIcon />}
            onClick={handleShowFilterDrawer}
          >
            {showFilters ? 'Hide filters' : 'Show filters'}
          </Button>
        </div>

        {showFilters && (
          <>
            <div>
              <Button
                disabled={!isAnyFilterApplied()}
                variant="primary"
                fullWidth
                onClick={() => {
                  handleShowFilterDrawer();
                  handleApplyingFilters();
                }}
              >
                Apply Filters
              </Button>
            </div>
            <ClearFiltersBtn />
          </>
        )}
      </div>
      {showFilters && (
        <div className="bg-white fixed w-full inset-0 h-full md:static md:w-auto md:h:auto">
          <div
            onClick={handleShowFilterDrawer}
            className="md:hidden w-full bg-black h-10 flex align-center justify-end"
          >
            <button className="text-white mr-3">
              <XIcon />
            </button>
          </div>
          <AppliedFilters />
          <FilterContent handleShowFilterDrawer={handleShowFilterDrawer} />
          <div className="flex justify-center m-4 md:hidden">
            <Button
              disabled={!isAnyFilterApplied()}
              variant="primary"
              onClick={() => {
                handleShowFilterDrawer();
                handleApplyingFilters();
              }}
            >
              Apply Filters
            </Button>
            <ClearFiltersBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
