import React, { useState, useContext } from 'react';
import Button from '../button/Button';
import { OffersContext } from '../../context/OffersContext';
import { ReactComponent as XIcon } from '../../assets/icons/x.svg';
const AppliedFilters = () => {
  const { filters, removeFilters } = useContext(OffersContext);

  const getAppliedFilters = Object.entries(filters);

  const handleRemovingFilter = (filterKey, filterVal) => {
    removeFilters({ key: filterKey, value: filterVal });
  };

  return (
    <div className="mb-4 flex gap-x-3">
      {getAppliedFilters?.map((filter) => {
        return (
          <>
            {filter[1].map((filterValue) => (
              <Button
                onClick={() => handleRemovingFilter(filter[0], filterValue)}
                size="small"
                icon={
                  <span className="text-[#176db7] flex items-center">
                    <XIcon />
                  </span>
                }
                variant="outlined"
                style={{
                  flexDirection: 'row-reverse',
                  columnGap: 5,
                  border: '1px solid #eee',
                }}
              >
                {filterValue}
              </Button>
            ))}
          </>
        );
      })}
    </div>
  );
};

export default AppliedFilters;
