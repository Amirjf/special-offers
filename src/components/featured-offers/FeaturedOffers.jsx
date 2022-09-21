import React from 'react';
import FeatureOfferItem from '../feature-offer-item/FeatureOfferItem';
import Heading from '../heading/Heading';

const FeaturedOffers = () => {
  return (
    <section>
      <Heading title="Featured Offers" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <FeatureOfferItem />
        <FeatureOfferItem />
        <FeatureOfferItem />
      </div>
    </section>
  );
};

export default FeaturedOffers;
