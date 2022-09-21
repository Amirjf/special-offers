import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import Checkbox from '../checkbox/Checkbox';

const BodyFilter = () => {
  const { filters, offerData, addFilters, removeFilters } =
    useContext(OffersContext);

  const handleChange = (event) => {
    if (event.target.checked) {
      addFilters({ key: 'body', value: event.target.value });
    } else {
      removeFilters({ key: 'body', value: event.target.value });
    }
  };

  const getModels = offerData.map((offer) => offer.model);

  return (
    <div className="grid grid-cols-3">
      {/* {getModels.map((model) => {
        return (
          <div>
            <Checkbox
              onChange={handleChange}
              label={model}
              id={model}
              name={model}
              value={model}
            />
          </div>
        );
      })} */}
    </div>
  );
};

export default BodyFilter;
