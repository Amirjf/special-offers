import React from 'react';

const FinanceApr = ({ financeRate, financePerMonths }) => {
  return (
    <div>
      <span className="text-sm">Finance Rate</span>
      <div className="flex flex-col">
        <div>
          <span className="text-3xl font-normal">{`${financeRate}%`}</span>
          <span className="text-sm">{'  '}APR</span>
        </div>
        <div>
          <span className="text-sm">for up to {financePerMonths} months</span>
        </div>
      </div>
    </div>
  );
};

export default FinanceApr;
