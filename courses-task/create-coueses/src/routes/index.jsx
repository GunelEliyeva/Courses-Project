import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages";
import AddProduct from "../pages/addproduct/addproduct";
import DetailPage from "../pages/featureds/detail/detail";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:_id" element={<DetailPage />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default Routers;
