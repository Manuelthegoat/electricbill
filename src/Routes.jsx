import React from "react";
import { Route, Routes } from "react-router-dom";
import AddAgent from "./Pages/AddAgent";
import AddKedcoStaff from "./Pages/AddKedcoStaff";
import AgentDetails from "./Pages/AgentDetails";
import Agents from "./Pages/Agents";
import AllOrders from "./Pages/AllOrders";
import CreateCustomer from "./Pages/CreateCustomer";
import CreateOrder from "./Pages/CreateOrder";
import Home from "./Pages/Home";
import KedcoStaff from "./Pages/KedcoStaff";
import OrderSummary from "./Pages/OrderSummary";
import PurchaseUnits from "./Pages/PurchaseUnits";
import Supervisors from "./Pages/Supervisors";
import Supervisorsdetails from "./Pages/Supervisorsdetails";
import TokenUnits from "./Pages/TokenUnits";
import TransferedUnits from "./Pages/TransferedUnits";
import TransferUnits from "./Pages/TransferUnits";

const Routing = ({selectedItem}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home selectedItem={selectedItem} />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/all-orders" element={<AllOrders />} />
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/all-agents" element={<Agents />} />
        <Route path="/create-agent" element={<AddAgent />} />
        <Route path="/agent-details" element={<AgentDetails />} />
        <Route path="/supervisors" element={<Supervisors />} />
        <Route path="/supervisors-details" element={<Supervisorsdetails />} />
        <Route path="/token-units" element={<TokenUnits />} />
        <Route path="/purchase-units" element={<PurchaseUnits />} />
        <Route path="/transfer-units" element={<TransferUnits />} />
        <Route path="/transfered-units" element={<TransferedUnits />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/kedco-staff" element={<KedcoStaff />} />
        <Route path="/add-kedco-staff" element={<AddKedcoStaff />} />
      </Routes>
    </>
  );
};

export default Routing;
