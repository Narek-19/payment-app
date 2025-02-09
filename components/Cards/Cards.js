import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const Cards = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      ),
      title: "SHORT AND LONG-FORM VIDEO",
      description: "Social media audiences love short- and long-form video content, which is why we integrate it into many of our clients' social media plans. Our social media marketing agency will work with you to develop and publish high-quality video content of all kinds to reach audiences."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"/>
        </svg>
      ),
      title: "INFOGRAPHICS AND DESIGN",
      description: "Elevate your organic social media presence with visually captivating infographics and designs, tailored by our experts to resonate across different platforms. Our organic social media marketing agency has the resources to help you create captivating, data-driven designs."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "CONSISTENT REPORTING",
      description: "Our social media company prides itself on transparency. We're always sharing the ins and outs of each campaign, so you know exactly what's performing well. With our detailed process and expert project management, you'll always know the status of your social media strategy."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "COMMUNITY ENGAGEMENT",
      description: "When you create awesome content, people will notice. Work with our team as we strive to cultivate a powerful presence online for your brand, one with strong support from the community. Let's get people talking about your business and create a memorable brand experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};