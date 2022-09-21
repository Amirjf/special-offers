import { createContext, useEffect, useState } from 'react';
import OFFERS from '../../data/OFFERS.json';
import { addFilter, removeFilter } from './utils/utils';
import queryString from 'query-string';

export const OffersContext = createContext({});

export const OffersProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [offerData, setOfferData] = useState(OFFERS);
  const [filteredOffers, setFilteredOffers] = useState(OFFERS);
  const [onFiltersApplied, setOnFiltersApplied] = useState(false);
  const addFilters = (filterToAdd) => {
    setFilters((currentFilters) => addFilter(currentFilters, filterToAdd));
  };

  const isAnyFilterApplied = () => {
    const params = window.location.search;
    if (params.length || Object.values(filters).length) {
      return true;
    } else {
      return false;
    }
  };

  const removeFilters = (filterToRemove) => {
    setFilters((currentFilters) =>
      removeFilter(currentFilters, filterToRemove)
    );
  };

  useEffect(() => {
    if (isAnyFilterApplied()) {
      const shallowEncoded = queryString.stringify(filters, {
        arrayFormat: 'comma',
      });

      window.history.pushState({}, 'filters', '?' + shallowEncoded);
    }
  }, [onFiltersApplied]);

  const value = {
    offerData,
    filters,
    addFilters,
    removeFilters,
    isAnyFilterApplied,
    setOfferData,
    setFilteredOffers,
    filteredOffers,
    setFilters,
    setOnFiltersApplied,
  };
  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
};
