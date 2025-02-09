import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ icon, title, description, buttonText, link }) => {
  return (
    <div className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 active:scale-95">
      <div className="w-12 h-12 mb-4 text-[#0e537e] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 transition-colors duration-300 group-hover:text-[#0e537e]">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-700">
        {description}
      </p>
      <Link
        href={link}
        className="inline-block px-6 py-2 bg-[#0e537e] text-white rounded-lg transition-all duration-300 
          hover:bg-[#0c4568] hover:shadow-lg active:shadow-md active:scale-95
          hover:-translate-y-0.5 active:translate-y-0"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default ServiceCard;