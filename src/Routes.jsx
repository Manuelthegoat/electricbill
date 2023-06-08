import React from "react";
import { Route, Routes } from "react-router-dom";
import AddAgent from "./Pages/AddAgent";
import AgentDetails from "./Pages/AgentDetails";
import Agents from "./Pages/Agents";
import AllOrders from "./Pages/AllOrders";
import CreateCustomer from "./Pages/CreateCustomer";
import CreateOrder from "./Pages/CreateOrder";
import Home from "./Pages/Home";
import Supervisors from "./Pages/Supervisors";
import Supervisorsdetails from "./Pages/Supervisorsdetails";
import TokenUnits from "./Pages/TokenUnits";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/all-orders" element={<AllOrders />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/all-agents" element={<Agents />} />
        <Route path="/create-agent" element={<AddAgent />} />
        <Route path="/agent-details" element={<AgentDetails />} />
        <Route path="/supervisors" element={<Supervisors />} />
        <Route path="/supervisors-details" element={<Supervisorsdetails />} />
        <Route path="/token-units" element={<TokenUnits />} />
      </Routes>
    </>
  );
};

export default Routing;
