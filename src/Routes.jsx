import React, { Suspense, lazy } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import KingFisher from "./Kingfisher";
import Parrot from "./Parrot";
import Columbidae from "./Columbidae";
import Header from "./Header";
import About from "./About";
const Peacock = lazy(() => import("./Peacock"));

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
          <Route path="/Header" element={<Header />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </>
    </Router>
  );
};

export default Routot;
