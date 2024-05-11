import React, { Suspense, lazy } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
// import Peacock from "./Peacock";
import KingFisher from "./Kingfisher";
import Parrot from "./Parrot";
import Columbidae from "./Columbidae";
const Peacock = lazy(() => import("./Peacock"));
// const Addproduct = lazy(() => import("./Addproduct"));

const Routot = () => {
  return (
    <Router>
      <>
        <nav className="app">
          <NavLink
            className="navlink"
            onClick={() =>
              (className = "navlink"
                ? (className = "active")
                : (className = ""))
            }
            to="/Combined"
          >
            &laquo;
          </NavLink>
          <NavLink
            className=" navlink"
            onClick={() =>
              (className = "navlink"
                ? (className = "active")
                : (className = ""))
            }
            to="/Peacock"
          >
            1
          </NavLink>
          <NavLink
            className="navlink"
            onClick={() =>
              (className = "navlink"
                ? (className = "active")
                : (className = ""))
            }
            to="/kingfisher"
          >
            2
          </NavLink>
          <NavLink
            className="navlink"
            onClick={() =>
              (className = "navlink"
                ? (className = "active")
                : (className = ""))
            }
            to="/Parrot"
          >
            3
          </NavLink>
          <NavLink
            className="navlink"
            onClick={() =>
              (className = "navlink"
                ? (className = "active")
                : (className = ""))
            }
            to="/Columbidae"
          >
            4
          </NavLink>
          <NavLink
            className="navlink"
            onClick={() =>
              (className = "navlink"
                ? (className = "active")
                : (className = ""))
            }
            to="/Combined"
          >
          
            &raquo;
          </NavLink>
        </nav>
        <Routes>
          <Route
            path="/Peacock"
            element={
              <Suspense fallback={<h1 className="parrotLoding"></h1>}>
                <Peacock />
              </Suspense>
            }
          />
          <Route path="/kingfisher" element={<KingFisher />} />
          <Route path="/Parrot" element={<Parrot />} />
          <Route path="/Columbidae" element={<Columbidae />} />
        </Routes>
      </>
    </Router>
  );
};

export default Routot;
