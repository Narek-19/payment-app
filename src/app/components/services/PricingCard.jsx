import Link from 'next/link';
import React from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const PricingCard = ({ title, price, description, features = [],link }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-[#0e537e]">${price}</span>
        <span className="text-gray-500">/creating</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex-grow space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckIcon />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
      <Link href={`/${link}`}>

      <button 
        className="w-full py-2 px-4 bg-[#0e537e] text-white rounded-lg transition-all duration-300 
          hover:bg-[#0c4568] hover:shadow-lg active:transform active:scale-95"
      >
        
        Select Plan
      </button>
      </Link>
    </div>
  );
};

export default PricingCard;