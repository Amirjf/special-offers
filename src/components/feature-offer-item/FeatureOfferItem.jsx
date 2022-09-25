import React, { useState } from 'react';
import Modal from '../modal/Modal';
import VehicleDisclaimer from '../vehicle-disclaimer/VehicleDisclaimer';

const FeatureOfferItem = ({ featuredOffer }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    image,
    lease_due_at_signing,
    disclaimer,
    price_label,
    lease_pay_months,
    price,
    lease_monthly_pay,
    title,
  } = featuredOffer;

  return (
    <>
      <div className="border-[1px] rounded-sm py-4">
        <div className="w-full">
          <img className="w-full mb-4" src={image} alt="offer-image" />
        </div>
        <div className="p-x-2 text-center">
          <div className="text-xl font-normal h-12">{title}</div>
          <hr className="mb-2 w-8 mx-auto" />
        </div>
        <div className="text-center font-normal flex flex-col gap-y-2">
          <span className="text-md">Lease from</span>
          <div>
            <span className="text-2xl">${`${lease_monthly_pay}`}</span> /mo
          </div>
          <span>{`for ${lease_pay_months} months. $${lease_due_at_signing} due at signing`}</span>
        </div>
        <div className="text-center pt-4">
          <button
            className="text-sm  text-primary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Offer Details
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          title={title}
          content={<VehicleDisclaimer content={disclaimer} />}
          setOpenModal={setShowModal}
        />
      )}
    </>
  );
};

export default FeatureOfferItem;
