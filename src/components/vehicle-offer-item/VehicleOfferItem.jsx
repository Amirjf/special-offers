import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import { ReactComponent as ChevUp } from '../../assets/icons/chevron-up.svg';
import { ReactComponent as ChevDown } from '../../assets/icons/chevron-down.svg';
import VehicleDisclaimer from '../vehicle-disclaimer/VehicleDisclaimer';
import 'tippy.js/dist/tippy.css';
import LeaseCol from './LeaseCol';
import FinanceApr from './FinanceApr';

const VehicleOfferItem = ({ offer }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const {
    image,
    lease_due_at_signing,
    disclaimer,
    price_label,
    lease_pay_months,
    name,
    price,
    year,
    model,
    lease_monthly_pay,
    finance_apr,
    finance_apr_months,
    make,
    title,
  } = offer;

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
            <div className="text-xl font-normal">{`${title}`}</div>
            {price && (
              <div>
                {price_label}
                <span className="font-semibold">{`$${price}`}</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-x-20">
            {lease_pay_months && (
              <LeaseCol
                LeaseMonthlyPrice={lease_monthly_pay}
                payPerMonths={lease_pay_months}
                leaseAtSigning={lease_due_at_signing}
              />
            )}

            {finance_apr && (
              <FinanceApr
                financeRate={finance_apr}
                financePerMonths={finance_apr_months}
              />
            )}

            <div
              onClick={showDislaimer}
              className="ml-auto cursor-pointer flex items-center justify-center text-center w-full md:w-auto  my-5"
            >
              <button className="text-lg text-primary">Offer Details</button>
              <span className="text-primary pt-1 pl-1 ">
                {showDisclaimer ? <ChevUp /> : <ChevDown />}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showDisclaimer && <VehicleDisclaimer content={disclaimer} />}
    </div>
  );
};

export default VehicleOfferItem;
