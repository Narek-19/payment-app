'use client'
import { PaymentProcess } from "@/app/components/payment/PaymentProcess";
import { useState } from "react";

const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
  
  const Feature = ({ children }) => (
    <div className="flex items-center gap-3 text-gray-600">
      <CheckIcon />
      <span>{children}</span>
    </div>
  );

export default function Page() {
  const [startCheckout,setStartCheckout] = useState(false);

    return (

      <>
            <PaymentProcess setStartCheckout={setStartCheckout} price={6300} titlePlan="Enterprise" startCheckout={startCheckout}/>

    
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 mt-14">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise</h1>
          <p className="text-xl text-gray-600">An excellent choice for growing businesses that need more resources and insights.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl font-bold text-[#0e537e]">$6,300</span>
                <span className="text-xl text-gray-500">/creating</span>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                <div className="space-y-4">
                  <Feature>Professional Website Creation</Feature>
                  <Feature>Mobile Responsive Design</Feature>
                  <Feature>Enterprise SEO Optimization</Feature>
                  <Feature>Contact Form Integration</Feature>
                  <Feature>Premium Support Package</Feature>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-[#0e537e] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#0e537e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Quick Launch</h4>
                    <p className="text-gray-600">Get your website up and running quickly with our streamlined process</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-[#0e537e] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-[#0e537e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Secure & Reliable</h4>
                    <p className="text-gray-600">Built with security best practices and reliable hosting solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
              onClick={()=>{
                setStartCheckout(true)
              }}
              className="w-full bg-[#0e537e] text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-[#0c4568] transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                Get Started Now
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              Need more features? Check out our Professional and Enterprise plans
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the Enterprise support package?</h3>
              <p className="text-gray-600">Our Enterprise support includes email support during business hours, with a 24-48 hour response time, and Enterprise maintenance updates for 45 days after launch.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to complete a Enterprise website?</h3>
              <p className="text-gray-600">Typically, a Enterprise website can be completed within 3-4 weeks, depending on content readiness and revision cycles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
    )
}