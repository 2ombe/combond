import React from "react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const contactData = [
    {
      icon: <FiMail className="text-blue-600 text-4xl" />,
      text: "jtuombe@gmail.com",
    },
    {
      icon: <FiPhone className="text-green-600 text-4xl" />,
      text: "+250 780486359",
    },
    {
      icon: <FiMapPin className="text-yellow-600 text-4xl" />,
      text: "KN 19 St, Kigali , Rwanda",
    },
    {
      icon: <FiLinkedin className="text-purple-600 text-4xl" />,
      text: "#",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">Contact Us</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {contactData.map((contact, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg mb-4">
                {contact.icon}
              </div>
              <p className="text-center text-white">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
