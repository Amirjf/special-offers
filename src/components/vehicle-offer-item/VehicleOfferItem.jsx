import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import InfoIcon from '../../assets/icons/info.svg';
import { ReactComponent as ChevUp } from '../../assets/icons/chevron-up.svg';
import { ReactComponent as ChevDown } from '../../assets/icons/chevron-down.svg';
import VehicleDisclaimer from '../vehicle-disclaimer/VehicleDisclaimer';
import 'tippy.js/dist/tippy.css';

const VehicleOfferItem = ({ offer }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const { image, year, make, model, price } = offer;

  const showDislaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };
  return (
    <div className="border-b-1 py-5">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-5">
          <img className="w-full" src={image} />
        </div>
        <div className="flex flex-col w-full justify-center">
          <div className="w-full pb-6">
            <div className="text-xl font-normal">{`${year} ${make} ${model}`}</div>
            <div>
              Starting at <span className="font-semibold">{price}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-20">
            <div>
              <span className="text-sm">Lease Payment</span>
              <div className="flex flex-col">
                <div>
                  <span className="text-3xl font-normal">$839</span>
                  <span className="text-sm"> /mo</span>
                </div>
                <div>
                  <span className="text-sm">for 36 months</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <br />
                <div>
                  <span className="font-normal">
                    <span className="text-3xl flex">
                      $5,624
                      <Tippy
                        content="Hello"
                        placement="bottom"
                        trigger="click"
                        arrow
                      >
                        <img
                          width={20}
                          className="cursor-pointer"
                          src={InfoIcon}
                        />
                      </Tippy>
                    </span>
                  </span>
                </div>
                <div>
                  <span className="text-sm">due at lease signing</span>
                </div>
              </div>
            </div>
            <div
              onClick={showDislaimer}
              className="ml-auto cursor-pointer flex items-center justify-center text-center w-full md:w-auto  my-5"
            >
              <button className="text-lg text-[#2e7cbe]">Offer Details</button>
              <span className="text-[#2e7cbe] pt-1 pl-1 ">
                {showDisclaimer ? <ChevUp /> : <ChevDown />}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showDisclaimer && <VehicleDisclaimer />}
    </div>
  );
};

export default VehicleOfferItem;
