import React from 'react';
import Filters from '../filters/Filters';
import FeaturedOffers from '../featured-offers/FeaturedOffers';
import NewVehiclesOffers from '../new-vehicles-offers/NewVehiclesOffers';

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sm:divide-x"
            role="tablist"
          >
            <li className="flex-auto text-center w-1/2">
              <a
                className={`text-xl break-words md:text-3xl inline-block leading-normal ${
                  openTab === 1
                    ? 'text-blue-600 border-b-2 border-b-blue-600'
                    : 'text-gray-400'
                }`}
                onClick={(e) => {
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#new-car-offers"
                role="tablist"
              >
                New Vehicle Offers
              </a>
            </li>
            <li className="flex-auto text-center w-1/2">
              <a
                className={`text-xl md:text-3xl inline-block leading-normal ${
                  openTab === 2
                    ? 'text-blue-600 border-b-2 border-b-blue-600'
                    : 'text-gray-400'
                }`}
                onClick={(e) => {
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#certified-pre-owned"
                role="tablist"
              >
                Certified Pre-Owned Offers
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? 'block' : 'hidden'}
                  id="new-car-offers"
                >
                  <Filters />
                  <FeaturedOffers />
                  <br />
                  <NewVehiclesOffers />
                </div>
                <div
                  className={openTab === 2 ? 'block' : 'hidden'}
                  id="certified-pre-owned"
                >
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
