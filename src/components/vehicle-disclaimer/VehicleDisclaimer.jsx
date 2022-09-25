import React from 'react';

const VehicleDisclaimer = ({ content }) => {
  return (
    <div>
      <h3 className="font-semibold mb-5">Lease disclaimer</h3>
      <hr className="my-4 w-8" />
      <p className="text-[11px] font-regular text-justify">{content}</p>
    </div>
  );
};

export default VehicleDisclaimer;
