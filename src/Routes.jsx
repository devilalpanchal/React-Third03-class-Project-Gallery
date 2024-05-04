import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ApiFetch from "./ApiFetch";
import ApiKingFisher from "./ApiKingfisher";
import ApiSecond from "./ApiScond";
import FourthApi from "./FourthApi";
const Routot = () => {
  return (
    <Router>
      <>
        <nav className="app">
          <NavLink className="navlink" onClick={()=>className="navlink"?className="active":className=""}  to="*"> &laquo;</NavLink>
          <NavLink className=" navlink" onClick={()=>className="navlink"?className="active":className=""} to="/apifetch">1</NavLink>
          <NavLink className="navlink" onClick={()=>className="navlink"?className="active":className=""} to="/apikingfisher">2 </NavLink>
          <NavLink className="navlink" onClick={()=>className="navlink"?className="active":className=""} to="/apisecond">3</NavLink>
          <NavLink className="navlink" onClick={()=>className="navlink"?className="active":className=""} to="/fourthapi">4</NavLink>
          <NavLink className="navlink" onClick={()=>className="navlink"?className="active":className=""} to="*"> &raquo;</NavLink>
        </nav>
        <Routes>
          <Route path="/apifetch" element={<ApiFetch />} />
          <Route path="/apikingfisher" element={<ApiKingFisher />} />
          <Route path="/apisecond" element={<ApiSecond />} />
          <Route path="fourthapi" element={<FourthApi />} />
        </Routes>
      </>
    </Router>
  );
};

export default Routot;
