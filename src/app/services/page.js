import Link from "next/link";
import ServiceCard from "../components/services/ServiceCard";
import Navbar from "../components/Navbar/Navbar";

export default async function Page() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Web Site Creating",
      description:
        "Transform your vision into a stunning, responsive website. Our expert team delivers custom web solutions that combine beautiful design with powerful functionality.",
      buttonText: "Learn More",
      link: "services/website",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      ),
      title: "Social Marketing",
      description:
        "Boost your brand presence across social media platforms with our strategic marketing solutions and engagement-driven campaigns.",
      buttonText: "Learn More",
      link: "services/social-marketing",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Application",
      description:
        "Coming soon... Stay tuned for our innovative mobile and web application development services.",
      buttonText: "Coming Soon",
      link: "#/applications",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-4 py-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(
            (service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={
                  service.description
                }
                buttonText={
                  service.buttonText
                }
                link={service.link}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
