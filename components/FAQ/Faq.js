import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{question}</h3>
        <span className="ml-4">
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-gray-600 leading-relaxed space-y-4">{answer}</div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const WhyWorkWithUsPoint = ({ title, description }) => {
  return (
    <div className="flex gap-4 items-start mb-8">
      <div className="text-teal-600 mt-1">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const services = [
    // ... existing services array
  ];

  const whyWorkWithUs = [
    // ... existing whyWorkWithUs array
  ];

  const faqs = [
    {
      question: "CAN'T I JUST MANAGE MY SOCIAL MEDIA ACCOUNTS ON MY OWN?",
      answer: 'You might ask, "Why hire a social media agency when I have plenty of in-house resources?" The fact is that social media marketing often requires plenty of expertise and industry knowledge to succeed. At Ignite Visibility, our experts know what works and what doesn\'t and can tailor all services to your unique needs, helping you focus more on growing your business.'
    },
    {
      question: "WHAT SHOULD I LOOK FOR BEFORE I HIRE A SOCIAL MEDIA COMPANY?",
      answer: (
        <div className="space-y-4">
          <p>When looking for a social media advertising company, there are some key elements that the organization should have, including:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>A proven process that gets results</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Custom solutions based on each business's unique goals and requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Years of experience working with many types of clients</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Access to the best social media marketing tools and platforms</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-teal-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>The ability to provide other supplemental digital marketing services</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "CAN I GET A CUSTOM PLAN FOR SOCIAL MEDIA MARKETING?",
      answer: (
        <div className="space-y-4">
          <p>You can benefit from a fully customized social media marketing solution focused precisely on engaging your target audience at every stage of the funnel. Our approach includes:</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Custom Content Scheduling:</h4>
              <p>We devise weekly, monthly, and seasonal/promotional posting strategies, optimized around your audience's active times for maximum engagement.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Monthly Performance Analysis:</h4>
              <p>We deliver comprehensive reports covering key metrics such as fan acquisition, overall impressions and engagements, comparison of top performing organic posts, competitor follower growth, and the efficacy of social traffic in driving website conversions. These insights guide our strategy's evolution.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Ongoing Strategy Optimization:</h4>
              <p>Based on monthly analytics, we offer continuous insights and recommendations to enhance your social media presence. By understanding what resonates with your followers, we fine-tune our efforts to ensure sustained growth and improved engagement.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "DO I REALLY NEED SOCIAL MEDIA MARKETING SERVICES?",
      answer: (
        <div className="space-y-4">
          <p>Nearly any business can benefit from social media management services to connect with audiences online. Whether your audience hangs out on TikTok, Facebook, Instagram, LinkedIn, or another platform, the right approach to social media will help you build a strong connection with the right people at the right time.</p>
          <p>Social media marketing is all about knowing which platforms your target audience uses and how to reach it. Using a combination of high-quality post content, ads, interactive media, and other elements, you can effectively promote your business and build your brand on social media.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Why Work With Us Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-12 text-center">
          WHY WORK WITH US?
        </h2>
        <div className="max-w-3xl mx-auto">
          {whyWorkWithUs.map((point, index) => (
            <WhyWorkWithUsPoint
              key={index}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors duration-300">
          Get Started Today
        </button>
      </div>
    </div>
  );
};