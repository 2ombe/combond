import React from "react";
import {
  FiPackage,
  FiLink,
  FiUsers,
  FiBriefcase,
  FiCreditCard,
  FiDollarSign,
  FiClipboard,
  FiAward,
} from "react-icons/fi";

const About = () => {
  const cardData = [
    {
      color: "bg-transparent",
      icon: <FiPackage className="text-blue-600 text-5xl" />,
      text: "Transparency and Trust",
    },
    {
      color: "bg-transparent",
      icon: <FiLink className="text-green-600 text-5xl" />,
      text: "Supply Chain Integration",
    },
    {
      color: "bg-transparent",
      icon: <FiUsers className="text-yellow-600 text-5xl" />,
      text: "Joint Ventures and Partnerships",
    },
    {
      color: "bg-transparent",
      icon: <FiBriefcase className="text-purple-600 text-5xl" />,
      text: "Intellectual Property Protection",
    },
    {
      color: "bg-transparent",
      icon: <FiCreditCard className="text-red-600 text-5xl" />,
      text: "Decentralized Marketplaces",
    },
    {
      color: "bg-transparent",
      icon: <FiDollarSign className="text-pink-600 text-5xl" />,
      text: "Smart Contract Templates",
    },
    {
      color: "bg-transparent",
      icon: <FiClipboard className="text-indigo-600 text-5xl" />,
      text: "Data Sharing and Collaboration",
    },
    {
      color: "bg-transparent",
      icon: <FiAward className="text-teal-600 text-5xl" />,
      text: "Traceability and Compliance",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 to-indigo-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">
          Empowering Collaboration with Blockchain
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 transition duration-300 hover:shadow-2xl ${card.color}`}
            >
              <div className="flex justify-center items-center h-20 mb-4">
                {card.icon}
              </div>
              <p className="text-center text-white">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
