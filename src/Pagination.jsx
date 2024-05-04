import React from "react";
import "./App.css";
// import { Link, Outlet } from "react-router-dom";
function Pagination() {
  return (
    <>
      {/* <nav>
        <Link to="/apifetch">ApiFetch</Link>
        <Link to="/apikingfisher">ApiKingFisher</Link>
        <Link to="/apisecond">ApiSecond</Link>
        <Link to="/fourthapi">FourthApi</Link>
      </nav> */}
      <div className="app">
        <a href="#" target="_blank">
          &laquo;
        </a>
        <a href="./Header" target="_blank">
          1
        </a>
        <a href="#" target="_blank">
          2
        </a>
        <a href="#" target="_blank">
          3
        </a>

        <a href="#" target="_blank">
          4
        </a>
        <a href="#" target="_blank" className="active">
          5
        </a>
        <a href="#" target="_blank">
          &raquo;
        </a>
      </div>
        {/* <Outlet/> */}
    </>
  );
}

export default Pagination;
