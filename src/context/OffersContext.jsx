import { createContext, useEffect, useState } from 'react';
import { addFilter, removeFilter } from './utils/utils';
import queryString from 'query-string';

export const OffersContext = createContext({});

export const OffersProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [offerData, setOfferData] = useState();
  const [filteredOffers, setFilteredOffers] = useState();
  const [loading, setLoading] = useState(false);
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

    if (result) {
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
        result = result.filter((offer) => getAppliedYears.includes(offer.year));
      }
      if (getAppliedBodyStyles) {
        result = result.filter((offer) =>
          getAppliedBodyStyles.includes(offer.body_style)
        );
      }
      if (getAppliedTypes) {
        result = result.filter((offer) => getAppliedTypes.includes(offer.type));
      }

      setFilteredOffers(result);
      setOnFiltersApplied(!onFiltersApplied);
      addFiltersToUrl();
    }
  };

  const addFiltersToUrl = () => {
    const shallowEncoded = queryString.stringify(filters, {
      arrayFormat: 'comma',
    });
    window.history.pushState(
      {},
      'filters',
      '' + `${shallowEncoded.length > 0 ? `?${shallowEncoded}` : ''}`
    );
  };

  const removeFilters = (filterToRemove) => {
    setFilters((currentFilters) =>
      removeFilter(currentFilters, filterToRemove)
    );
  };

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      const res = await fetch(
        //mercedesbenzspokane
        //mercedesbenzseatle
        //sprinterseatlle
        //sprinterswilsonville
        'https://api.dealertower.com/mercedes-benz/incentives/sprinterswilsonville'
      );
      const { data } = await res.json();
      setOfferData(data);
      setFilteredOffers(data);
      setLoading(false);
    };

    fetchOffers();
  }, []);

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
