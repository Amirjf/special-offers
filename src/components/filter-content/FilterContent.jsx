import React, { useContext, useState } from 'react';
import Button from '../button/Button';
import { ReactComponent as ChevUp } from '../../assets/icons/chevron-up.svg';
import { ReactComponent as ChevDown } from '../../assets/icons/chevron-down.svg';
import FiltersContainer from '../filters-container/FiltersContainer';
import MobileFilterItems from '../mobile-filter-items/MobileFilterItems';
import MobileGoBackButton from '../mobile-go-back-button/MobileGoBackButton';
import ClearFiltersBtn from '../clear-filter-btn/ClearFiltersBtn';
import { OffersContext } from '../../context/OffersContext';
const FilterContent = ({ handleShowFilterDrawer }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const { isAnyFilterApplied, handleApplyingFilters } =
    useContext(OffersContext);

  const handleSelectedFilter = (filterName) => {
    if (selectedFilter === filterName) {
      setSelectedFilter('');
    } else {
      setSelectedFilter(filterName);
    }
  };

  return (
    <div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-5">
        <Button
          variant="outlined"
          icon={selectedFilter === 'bodyStyle' ? <ChevUp /> : <ChevDown />}
          fullWidth
          size="large"
          isActive={selectedFilter === 'bodyStyle'}
          onClick={() => handleSelectedFilter('bodyStyle')}
        >
          BodyStyle
        </Button>
        <Button
          variant="outlined"
          icon={selectedFilter === 'model' ? <ChevUp /> : <ChevDown />}
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
