import React from "react";

const features = [
  {
    title: "Fast Billing",
    description: "Accurate and quick billing to speed up your business transactions.",
    icon: "🧾",
  },
  {
    title: "Inventory Management",
    description: "Optimize stock levels and track product movement with ease.",
    icon: "📦",
  },
  {
    title: "Smart Reports",
    description: "Gain insights with real-time reports accessible anytime.",
    icon: "📊",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Smart Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <a
                href="#"
                className="bg-[#6556cd] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#5544c2] hover:scale-105"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
