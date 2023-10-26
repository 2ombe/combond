import React from "react";
import logo from "./logo.jpeg";

const Header = () => {
  return (
    <header className="py-4 px-6 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>
      </div>
    </header>
  );
};

export default Header;
