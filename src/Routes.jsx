import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllOrders from './Pages/AllOrders';
import CreateCustomer from './Pages/CreateCustomer';
import Home from './Pages/Home';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-customer' element={<CreateCustomer />} />
        <Route path='/all-orders' element={<AllOrders />} />
      </Routes>
    </>
  )
}

export default Routing
