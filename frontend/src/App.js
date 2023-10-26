import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import CompanyRegistration from "./screen/company/CreateCompany";
import Company from "./component/Company";
import CompanyList from "./screen/company/CompanyList";
import CompanyDetails from "./screen/company/CompanyScreen";
import CreateFranchiseTerm from "./screen/company/CreateFranchiseTerm";
import FranchiseTermList from "./screen/company/FranchiseList";

function App() {
  //we committed this

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyRegistration />} />
        <Route path="/details" element={<FranchiseTermList />} />
        <Route path="/franchisee" element={<CreateFranchiseTerm />} />
        <Route path="/list" element={<CompanyList />} />
        <Route path="/myfranchise" element={<CompanyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
