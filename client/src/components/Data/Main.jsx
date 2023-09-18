import React, { useContext} from "react";
import "./Main.css";
import OnPageScore from "./OnPageScore";
import DataContext from "../context/DataContext";
const Main = () => {
  const { Data } = useContext(DataContext);
  console.log("data:"+Data)
  const score = 97;
  return (
    <div className="flex flex-center">
      <div className="head">
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
