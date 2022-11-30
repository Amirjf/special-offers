import React, { useContext } from 'react';
import VehicleOfferItem from '../vehicle-offer-item/VehicleOfferItem';
import { OffersContext } from '../../context/OffersContext';
import Spinner from '../spinner/Spinner';
const NewVehiclesOffers = () => {
  const { filteredOffers } = useContext(OffersContext);

  if (!filteredOffers) return <Spinner />;
  return (
    <>
      {filteredOffers
        .filter((allOffer) => allOffer.type !== 'used')
        .map((offer, idx) => (
          <VehicleOfferItem key={`${offer.name}-${idx}`} offer={offer} />
        ))}
    </>
  );
};

export default NewVehiclesOffers;
