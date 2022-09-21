import React, { useState } from 'react';
import VehicleOfferItem from '../vehicle-offer-item/VehicleOfferItem';
import OFFERS from '../../../data/OFFERS.json';
const NewVehiclesOffers = () => {
  const [offerData, setOfferData] = useState(OFFERS);
  const handleFilter = () => {
    const updatedOffers = offerData.filter((offer) => {
      if (offer.model === 'Mustang') {
        return offer;
      }
    });
    setOfferData(updatedOffers);
  };

  return (
    <>
      <button onClick={handleFilter} className="p-4 bg-fuchsia-600 text-white">
        FILTER
      </button>
      {offerData.map((offer) => (
        <VehicleOfferItem key={offer.id} offer={offer} />
      ))}
    </>
  );
};

export default NewVehiclesOffers;
