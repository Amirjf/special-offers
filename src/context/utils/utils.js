export const addFilter = (filters, filterToAdd) => {
  if (filterToAdd.key === 'cond') {
    return { ...filters };
  }
  let newFilters = [filterToAdd.value];

  if ([filterToAdd.key] in filters)
    newFilters = [...filters[filterToAdd.key], filterToAdd.value];

  return { ...filters, [filterToAdd.key]: [...new Set(newFilters)] };
};

export const removeFilter = (filters, filterToRemove) => {
  const newFilter = filterToRemove.value;
  const filterValues = filters[filterToRemove.key];

  const updatedFilter = filterValues?.filter((filter) => filter !== newFilter);

  if (updatedFilter?.length) {
    return { ...filters, [filterToRemove.key]: [...new Set(updatedFilter)] };
  } else {
    delete filters[filterToRemove.key];
    return { ...filters };
  }
};
