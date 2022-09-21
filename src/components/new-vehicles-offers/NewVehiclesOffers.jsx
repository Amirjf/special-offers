import React, { useContext, useState } from 'react';
import VehicleOfferItem from '../vehicle-offer-item/VehicleOfferItem';
import { OffersContext } from '../../context/OffersContext';
const NewVehiclesOffers = () => {
  const { offerData, filteredOffers } = useContext(OffersContext);

  return (
    <>
      {filteredOffers.map((offer) => (
        <VehicleOfferItem key={offer.id} offer={offer} />
      ))}
    </>
  );
};

export default NewVehiclesOffers;
