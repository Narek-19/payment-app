import React from 'react';

export const Why = () => {
  const valueProps = [
    {
      title: "Expert and experienced staff.",
      description: "Our team has years of experience, specifically in social media marketing strategy."
    },
    {
      title: "No abstract tactics.",
      description: "We want you to see results. From day one, we'll set quantifiable, achievable goals, instead of abstract tactics no one really understands."
    },
    {
      title: "Transparent and honest.",
      description: "With our detailed processes and expert project management, you will always know the status and progress of your social media marketing plan."
    },
    {
      title: "Data-driven.",
      description: "There is a reason why we do what we do. Our strategy will revolve around identifying your audience, gathering competitive insights, and meticulously auditing your existing marketing methods for a bespoke strategy grounded in reality."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     
      {/* Main Content */}
      <main className="mt-16 pt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-600 text-center mb-16">
            WHY WORK WITH US?
          </h1>
          
          {/* Value Propositions */}
          <div className="grid gap-8 my-12">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex gap-4 items-start p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};