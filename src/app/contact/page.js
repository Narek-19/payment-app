export default async function Page() {
 
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you. Here's how you can reach us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
            <div className="space-y-8">
              {/* Address Section */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Location</h3>
                  <p className="text-gray-600">Los Angeles, CA</p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Number</h3>
                  <p className="text-gray-600">+1-909-903-0009</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stylized Map */}
          <div className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
            <div className="relative">
              {/* Stylized Map Background */}
              <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
              <div className="relative p-6">
                {/* Map Grid */}
                <div className="grid grid-cols-12 gap-2 h-96">
                  {[...Array(144)].map((_, index) => (
                    <div
                      key={index}
                      className="bg-blue-100/30 rounded-sm transition-colors duration-300 hover:bg-blue-200/50"
                    ></div>
                  ))}
                </div>
                {/* Location Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-1 bg-blue-600 rounded-full opacity-30 animate-ping"></div>
                  </div>
                </div>
                {/* Route Path */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-400"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
  }