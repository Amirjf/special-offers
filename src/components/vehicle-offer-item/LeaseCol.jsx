import Tippy from '@tippyjs/react';
import React from 'react';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';

const LeaseCol = ({ LeaseMonthlyPrice, payPerMonths, leaseAtSigning }) => {
  return (
    <div className="flex gap-x-16">
      <div>
        <span className="text-sm">Lease Payment</span>
        <div className="flex flex-col">
          <div>
            <span className="text-3xl font-normal">{`$${LeaseMonthlyPrice}`}</span>
            <span className="text-sm"> /mo</span>
          </div>
          <div>
            <span className="text-sm">for {payPerMonths} months</span>
          </div>
        </div>
      </div>

      <div>
        {leaseAtSigning && (
          <div className="flex flex-col">
            <br />
            <div>
              <span className="flex font-normal">
                <span className="text-3xl">{`$${leaseAtSigning}`}</span>
                <Tippy content="Hello" placement="bottom" trigger="click" arrow>
                  <span className="cursor-pointer">
                    <InfoIcon className="w-5" />
                  </span>
                </Tippy>
              </span>
            </div>
            <div>
              <span className="text-sm">due at lease signing</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaseCol;
