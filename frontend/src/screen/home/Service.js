import React from "react";

const Service = () => {
  const services = [
    "We provide a trustful and transparent environment",
    "Enable finance and investment flow",
    "We provide a decentralized marketplace",
    "We provide improved value chain and supply chain",
    "We provide an alternative source of revenue for states to facilitate tariff cutouts",
    "We enable compliance",
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="h-6 w-6 bg-blue-500 rounded-full mr-4 mt-1"></div>
              <p className="text-white">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
