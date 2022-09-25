import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import FeatureOfferItem from '../feature-offer-item/FeatureOfferItem';
import Heading from '../heading/Heading';

const FeaturedOffers = () => {
  const { offerData } = useContext(OffersContext);

  const featuredOffers = offerData.filter((offer) => {
    if (
      offer.title === '2022 GLC 300 SUV' ||
      offer.title === '2022 GLE 350 SUV' ||
      offer.title === '2022 EQS 450+ Sedan'
    ) {
      return offer;
    }
  });
  return (
    <section>
      <Heading title="Featured Offers" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {featuredOffers.map((featuredOffer) => (
          <FeatureOfferItem featuredOffer={featuredOffer} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedOffers;
