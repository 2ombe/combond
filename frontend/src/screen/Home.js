import React from "react";
import Hero from "./home/Hero"
import Header from "./home/Header"
import About from "./home/About";
import Contact from "./home/Contact"
import Service from "./home/Service";


function Home() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-purple-900 to-indigo-800">
      <Header />
      <Hero />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default Home;
