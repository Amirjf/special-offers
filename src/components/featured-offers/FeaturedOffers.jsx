import React, { useContext } from 'react';
import { OffersContext } from '../../context/OffersContext';
import FeatureOfferItem from '../feature-offer-item/FeatureOfferItem';
import Heading from '../heading/Heading';

const FeaturedOffers = () => {
  const { offerData } = useContext(OffersContext);

  const featuredOffers = offerData.slice(0, 3);
  console.log(featuredOffers);
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
