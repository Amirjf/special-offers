import { createContext, useEffect, useState } from 'react';
import OFFERS from '../../data/OFFERS2.json';
import { addFilter, removeFilter } from './utils/utils';
import queryString from 'query-string';

export const OffersContext = createContext({});

export const OffersProvider = ({ children }) => {
  const [filters, setFilters] = useState({});

  const [offerData, setOfferData] = useState(OFFERS);
  const [filteredOffers, setFilteredOffers] = useState(OFFERS);
  const [onFiltersApplied, setOnFiltersApplied] = useState(false);
  const [isAppliedFiltersByUrl, setIsAppliedFiltersByUrl] = useState({});
  const addFilters = (filterToAdd) => {
    setFilters((currentFilters) => addFilter(currentFilters, filterToAdd));
  };
  const addFakeFilters = (filterToAdd) => {
    setIsAppliedFiltersByUrl((currentFilters) =>
      addFilter(currentFilters, filterToAdd)
    );
  };

  const isAnyFilterApplied = () => {
    const params = window.location.search;

    if (params.length || Object.values(filters).flat().length) {
      return true;
    } else {
      return false;
    }
  };

  const handleApplyingFilters = () => {
    let result = [];

    result = offerData;

    const getAppliedModels = filters.model;

    const getAppliedYears = filters.year;

    const getAppliedBodyStyles = filters.body;
    const getAppliedTypes = filters.type;

    if (getAppliedModels) {
      result = result.filter((offer) =>
        getAppliedModels?.includes(offer.model)
      );
    }

    if (getAppliedYears) {
      result = result.filter((offer) =>
        getAppliedYears.includes(offer.year.toString())
      );
    }
    if (getAppliedBodyStyles) {
      result = result.filter((offer) =>
        getAppliedBodyStyles.includes(offer.body_style.toString())
      );
    }
    if (getAppliedTypes) {
      result = result.filter((offer) =>
        getAppliedTypes.includes(offer.type.toString())
      );
    }

    setFilteredOffers(result);
    setOnFiltersApplied(!onFiltersApplied);
    addFiltersToUrl();
  };

  const addFiltersToUrl = () => {
    const shallowEncoded = queryString.stringify(filters, {
      arrayFormat: 'comma',
    });
    window.history.pushState({}, 'filters', '?' + shallowEncoded);
  };

  const removeFilters = (filterToRemove) => {
    setFilters((currentFilters) =>
      removeFilter(currentFilters, filterToRemove)
    );
  };

  //Handly applying filters by url
  useEffect(() => {
    const filterParams = queryString.parse(window.location.search, {
      arrayFormat: 'comma',
    });
    if (Object.values(filterParams).length) {
      for (const [key, values] of Object.entries(filterParams)) {
        if (Array.isArray(values)) {
          values.map((filterVal) => {
            addFilters({ key: key, value: filterVal });
            addFakeFilters({ key: key, value: filterVal });
          });
        } else {
          addFilters({ key: key, value: values });
          addFakeFilters({ key: key, value: values });
        }
      }
    }
  }, []);

  useEffect(() => {
    handleApplyingFilters();
  }, [isAppliedFiltersByUrl]);

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
    handleApplyingFilters,
  };
  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
};
