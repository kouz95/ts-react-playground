import React from 'react';
import { Route, Routes } from "react-router-dom";
import OrderAdmin from "./pages/OrderAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OrderAdmin />} />
        <Route path="/admin" element={<OrderAdmin />} />
      </Routes>
    </>
  );
}

export default App;
