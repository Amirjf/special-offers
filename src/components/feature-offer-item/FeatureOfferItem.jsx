import React from 'react';

const FeatureOfferItem = () => {
  return (
    <div className="border-[1px] rounded-sm py-4">
      <div className="w-full">
        <img
          className="w-full mb-4"
          src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/gle/gle-suv/all-vehicles/2022-GLE350-SUV-AVP-DR.png"
          alt="offer-image"
        />
      </div>
      <div className="p-x-2 text-center">
        <div className="text-xl font-normal h-12">2022 EQS 450+ Sedan</div>
        <hr className="pb-2 w-8 mx-auto" />
      </div>
      <div className="text-center font-normal flex flex-col gap-y-2">
        <span className="text-md">Lease from</span>
        <div>
          <span className="text-2xl">$839</span> /mo
        </div>
        <span>for 36 months. $3,933 due at signing</span>
      </div>
      <div className="text-center pt-4">
        <button className="text-sm  text-primary">Offer Details</button>
      </div>
    </div>
  );
};

export default FeatureOfferItem;
