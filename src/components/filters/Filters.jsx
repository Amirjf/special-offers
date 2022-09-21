import React, { useState, useContext } from 'react';
import Button from '../button/Button';
import { OffersContext } from '../../context/OffersContext';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as ChevUp } from '../../assets/icons/chevron-up.svg';
import { ReactComponent as ChevDown } from '../../assets/icons/chevron-down.svg';
import FiltersContainer from '../filters-container/FiltersContainer';
import ClearFiltersBtn from '../clear-filter-btn/ClearFiltersBtn';
import AppliedFilters from '../applied-filters/AppliedFilters';

const Filters = () => {
  const {
    isAnyFilterApplied,
    filters,
    offerData,
    setFilteredOffers,
    setOnFiltersApplied,
  } = useContext(OffersContext);

  console.log(Object.values(filters).length, 'Object.values(filters).length');

  const [showFilters, setShowFilters] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleShowFilterDrawer = () => {
    setShowFilters(!showFilters);
  };

  const handleSelectedFilter = (filterName) => {
    if (selectedFilter === filterName) {
      setSelectedFilter('');
    } else {
      setSelectedFilter(filterName);
    }
  };

  const handleApplyingFilters = () => {
    let result = [];

    result = offerData;

    const getAppliedModels = filters.model;

    const getAppliedYears = filters.year;

    if (getAppliedModels) {
      result = result.filter((offer) => getAppliedModels.includes(offer.model));
    }

    if (getAppliedYears) {
      result = result.filter((offer) =>
        getAppliedYears.includes(offer.year.toString())
      );
    }
    setFilteredOffers(result);
    handleShowFilterDrawer();
    setOnFiltersApplied((prev) => !prev);
  };

  return (
    <div className="sticky top-0 py-5 bg-white">
      <div className="flex gap-5 mb-5">
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
                onClick={handleApplyingFilters}
              >
                Apply Filters
              </Button>
            </div>
            <ClearFiltersBtn />
          </>
        )}
      </div>
      {showFilters && <AppliedFilters />}

      {showFilters && (
        <div className="">
          <div className="grid grid-cols-3 gap-x-5">
            <Button
              variant="outlined"
              icon={<ChevDown />}
              fullWidth
              size="large"
              isActive={selectedFilter === 'bodyStyle'}
              onClick={() => handleSelectedFilter('bodyStyle')}
            >
              BodyStyle
            </Button>
            <Button
              variant="outlined"
              icon={<ChevDown />}
              fullWidth
              size="large"
              isActive={selectedFilter === 'model'}
              onClick={() => handleSelectedFilter('model')}
            >
              Model
            </Button>
            <Button
              variant="outlined"
              icon={selectedFilter === 'year' ? <ChevUp /> : <ChevDown />}
              fullWidth
              size="large"
              isActive={selectedFilter === 'year'}
              onClick={() => handleSelectedFilter('year')}
            >
              Year
            </Button>
          </div>
          {selectedFilter && (
            <FiltersContainer selectedFilter={selectedFilter} />
          )}
        </div>
      )}
    </div>
  );
};

export default Filters;
