import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import FeatureOfferItem from '../feature-offer-item/FeatureOfferItem';
import Heading from '../heading/Heading';
import Loader from '../skeleton/Loader';

const FeaturedOffers = () => {
  const { offerData } = useContext(OffersContext);

  if (!offerData)
    return (
      <>
        <Heading title="Featured Offers" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Loader />
          <Loader />
          <Loader />
        </div>
      </>
    );

  const featuredOffers = offerData?.filter((offer) => {
    if (
      offer.title === '2022 EQS 450+ Sedan' ||
      offer.title === '2022 GLE 350 SUV' ||
      offer.title === '2022 GLC 300 SUV'
    ) {
      return offer;
    }
  });
  return (
    <section>
      <Heading title="Featured Offers" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {featuredOffers.map((featuredOffer, idx) => (
          <FeatureOfferItem key={idx} featuredOffer={featuredOffer} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedOffers;
