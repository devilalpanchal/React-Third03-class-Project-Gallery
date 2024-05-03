import { useState } from "react";
import "./App.css";
import Pagination from "./Pagination";
import ApiFetch from "./ApiFetch";
import Header from "./Header";
function App() {
  return (
    <>
      <ApiFetch />
      <Pagination />
      {/* <Header/> */}
    </>
  );
}

export default App;
