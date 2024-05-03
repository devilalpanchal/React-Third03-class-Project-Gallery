import React from "react";
import "./App.css";
import Header from "./Header";
function Pagination() {
    return (
        <>
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
        </>
    );
}

export default Pagination;
