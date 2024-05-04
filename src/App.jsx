import { useState } from "react";
import "./App.css";
import Pagination from "./Pagination";
import ApiFetch from "./ApiFetch";
import Header from "./Header";
import ApiScond from "./ApiScond";
import FourthApi from "./FourthApi";
import ApiKingFisher from "./ApiKingfisher";
import Routot from "./Routes";
function App() {
  return (
    <>
      <Header/>
      <Routot/>
      <ApiFetch />
      {/* <ApiScond/> */}
      {/* <ApiKingFisher/> */}
      {/* <FourthApi/> */}
      {/* <Pagination /> */}
    </>
  );
}

export default App;
