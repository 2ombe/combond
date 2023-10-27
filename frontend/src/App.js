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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./screen/company/Payment";

function App() {
  //we committed this

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyRegistration />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/companylist" element={<Company />} />
        <Route path="/details" element={<FranchiseTermList />} />
        <Route path="/franchisee" element={<CreateFranchiseTerm />} />
        <Route path="/list" element={<CompanyList />} />
        <Route path="/myfranchise" element={<CompanyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
