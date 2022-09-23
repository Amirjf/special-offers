import React from 'react';

const VehicleDisclaimer = ({ content }) => {
  return (
    <div className="mt-5">
      <h3 className="font-semibold mb-5">Lease disclaimer</h3>
      <hr className="pb-2 w-8" />
      <p className="text-[16px] font-regular text-justify">{content}</p>
    </div>
  );
};

export default VehicleDisclaimer;
