import PricingCard from "@/app/components/services/PricingCard";

export default async function Page() {
    const plans = [
        {
          title: "Basic",
          price: "2,200",
          description: "Perfect for individuals and small businesses.",
          features: ["Creating Platforms", "Support", "Basic Features"],
          link:'services/social-marketing/basic'
        },
        {
          title: "Professional",
          price: "4,700",
          description: "An excellent choice for growing businesses that need more resources and insights.",
          features: ["Creating Premium Platforms", "Premium Support", "Advanced Features"],
            link:'services/social-marketing/professional'
        },
        {
          title: "Enterprise",
          price: "6,300",
          description: "Fully customizable settings to match your brand's needs.",
          features: ["Full Marketing", "24/7 Support", "Custom Solutions"],
          link:'services/social-marketing/enterprise'
        }
      ];
    return (
        <section className="py-16 px-4 mt-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
    )
}