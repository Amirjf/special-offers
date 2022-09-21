import React, { useState } from 'react';
import Button from '../button/Button';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as ChevUp } from '../../assets/icons/chevron-up.svg';
import { ReactComponent as ChevDown } from '../../assets/icons/chevron-down.svg';
import FiltersContainer from '../filters-container/FiltersContainer';
const Filters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const handleShowingFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSelectedFilter = (filterName) => {
    if (selectedFilter === filterName) {
      setSelectedFilter('');
    } else {
      setSelectedFilter(filterName);
    }
  };

  return (
    <>
      <div className="flex gap-5 mb-5">
        <div>
          <Button
            variant="outlined"
            icon={<FilterIcon />}
            onClick={handleShowingFilters}
          >
            {showFilters ? 'Hide filters' : 'Show filters'}
          </Button>
        </div>
        <div>
          <Button disabled variant="outlined" fullWidth>
            Apply Filters
          </Button>
        </div>
      </div>
      {showFilters && (
        <>
          <div className="grid grid-cols-3 gap-x-5">
            <Button
              variant="outlined"
              icon={<ChevDown />}
              fullWidth
              size="large"
              onClick={() => handleSelectedFilter('bodyStyle')}
            >
              BodyStyle
            </Button>
            <Button
              variant="outlined"
              icon={<ChevDown />}
              fullWidth
              size="large"
              onClick={() => handleSelectedFilter('model')}
            >
              Model
            </Button>
            <Button
              variant="outlined"
              icon={<ChevDown />}
              fullWidth
              size="large"
              onClick={() => handleSelectedFilter('year')}
            >
              Year
            </Button>
          </div>
          <FiltersContainer selectedFilter={selectedFilter} />
        </>
      )}
    </>
  );
};

export default Filters;
