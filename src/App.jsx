import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <a href="#" target="_blank">
          &laquo;
        </a>
        <a href="#" target="_blank">
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
    </>
  );
}

export default App;
