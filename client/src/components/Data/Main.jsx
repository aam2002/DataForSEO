import React, { useState } from "react";
import "./Main.css";
import OnPageScore from "./OnPageScore";
const Main = () => {
  const score = 97;
  return (
    <div className="flex flex-center">
      <div className="head">
        <div>
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="main-data">
          <OnPageScore score={score} />
          <div className="additional-main-data">
            <div className="test ">
              <div className="data-value">450897974</div>
              Total DOM size
            </div>
            <div className="test ">
              <div className="data-value">450897974</div>
              Encoded Size
            </div>
            <div className="test ">
              <div className="data-value">450897974</div>
              Click Depth
            </div>
            <div className="test ">
              <div className="data-value">450897974</div>
              Total Transfer Size
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
