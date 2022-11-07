import React, { useContext } from 'react';
import Filters from '../filters/Filters';
import FeaturedOffers from '../featured-offers/FeaturedOffers';
import NewVehiclesOffers from '../new-vehicles-offers/NewVehiclesOffers';
import { OffersContext } from '../../context/OffersContext';
import VehicleOfferItem from '../vehicle-offer-item/VehicleOfferItem';

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const params = window.location.search;
  const { offerData, filters } = useContext(OffersContext);

  const isFilterApplied =
    Object.values(filters).flat().length > 0 && params.length;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap mt-10 pb-4 flex-row sm:divide-x-1"
            role="tablist"
          >
            <li className="flex-auto text-center w-1/2">
              <a
                className={`text-xl relative break-words md:text-3xl inline-block leading-normal ${
                  openTab === 1
                    ? 'text-primary border-b-3 border-b-primary after:content-[""] after:w-0 after:h-0 after:absolute after:top-full after:ml-[-3px] after:left-1/2 after:border-solid after:border-t-[6px] after:border-r-[6.5px] after:border-b-[0] after:border-l-[6.5px] after:border-t-[#176db7] after:border-r-transparent after:border-b-transparent after:border-l-transparent'
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
                className={`text-xl relative md:text-3xl inline-block leading-normal ${
                  openTab === 2
                    ? 'text-primary border-b-3 border-b-primary after:content-[""] after:w-0 after:h-0 after:absolute after:top-full after:ml-[-3px] after:left-1/2 after:border-solid after:border-t-[6px] after:border-r-[6.5px] after:border-b-[0] after:border-l-[6.5px] after:border-t-[#176db7] after:border-r-transparent after:border-b-transparent after:border-l-transparent'
                    : 'text-gray-400'
                }`}
                onClick={() => {
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
                <div className={openTab === 1 ? 'block' : 'customHidden'}>
                  <Filters />
                  {!isFilterApplied && <FeaturedOffers />}

                  <br />
                  <NewVehiclesOffers />
                </div>
                <div
                  className={openTab === 2 ? 'block' : 'customHidden'}
                  id="certified-pre-owned"
                >
                  {offerData
                    ?.filter((o) => o.type === 'used')
                    .map((offer, idx) => (
                      <VehicleOfferItem
                        key={`${offer.name}-${idx}`}
                        offer={offer}
                      />
                    ))}
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
