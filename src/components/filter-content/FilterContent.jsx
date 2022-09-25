import React, { useState } from 'react';
import Button from '../button/Button';
import { ReactComponent as ChevUp } from '../../assets/icons/chevron-up.svg';
import { ReactComponent as ChevDown } from '../../assets/icons/chevron-down.svg';
import FiltersContainer from '../filters-container/FiltersContainer';
import MobileFilterItems from '../mobile-filter-items/MobileFilterItems';
import MobileGoBackButton from '../mobile-go-back-button/MobileGoBackButton';
import { FILTERS } from '../../utils/constants';

const FilterContent = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSelectedFilter = (filterName) => {
    if (selectedFilter === filterName) {
      setSelectedFilter('');
    } else {
      setSelectedFilter(filterName);
    }
  };

  return (
    <div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-x-5">
        {FILTERS.map((filterItem, idx) => (
          <Button
            key={idx}
            variant="outlined"
            icon={
              selectedFilter === filterItem.value ? <ChevUp /> : <ChevDown />
            }
            fullWidth
            size="large"
            isActive={selectedFilter === filterItem.value}
            onClick={() => handleSelectedFilter(filterItem.value)}
          >
            {filterItem.name}
          </Button>
        ))}
      </div>
      {selectedFilter && (
        <MobileGoBackButton
          selectedFilter={selectedFilter}
          handleSelectedFilter={handleSelectedFilter}
        />
      )}
      {!selectedFilter && (
        <>
          <MobileFilterItems
            selectedFilter={selectedFilter}
            handleSelectedFilter={handleSelectedFilter}
          />
        </>
      )}

      {selectedFilter && <FiltersContainer selectedFilter={selectedFilter} />}
    </div>
  );
};

export default FilterContent;
