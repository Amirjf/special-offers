import React, { useState } from 'react';
import { ReactComponent as XIcon } from '../../assets/icons/x.svg';
import { handleShowingTextWithTradeMark } from '../../utils/utils';

const FeatureOfferItem = ({ featuredOffer }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const {
    image,
    lease_due_at_signing,
    disclaimer,
    lease_pay_months,
    lease_monthly_pay,
    title,
  } = featuredOffer;

  return (
    <>
      <div className="border-[1px] relative rounded-sm py-4">
        {showDisclaimer && (
          <div className="absolute bg-[#ffffff84] backdrop-blur-md inset-0 overflow-hidden overflow-y-auto text-[11px] text-justify p-2">
            <div>
              <span className="w-full font-semibold text-sm">
                Lease disclaimer
              </span>
              <div
                className="absolute rounded-full top-1 right-1 cursor-pointer hover:bg-primary hover:text-white"
                onClick={() => setShowDisclaimer(false)}
              >
                <XIcon className="w-5 h-5 text-lg" />
              </div>
            </div>

            {disclaimer}
          </div>
        )}

        <div className="w-full">
          <img className="w-full mb-4" src={image} alt="offer-image" />
        </div>
        <div className="p-x-2 text-center">
          <div className="text-xl font-normal h-12">
            {handleShowingTextWithTradeMark(title)}
          </div>
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
            onClick={() => setShowDisclaimer(!showDisclaimer)}
          >
            Offer Details
          </button>
        </div>
      </div>
      {/* {showModal && (
        <Modal
          title={title}
          content={<VehicleDisclaimer content={disclaimer} />}
          setOpenModal={setShowModal}
        />
      )} */}
    </>
  );
};

export default FeatureOfferItem;
