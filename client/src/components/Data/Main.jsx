import React, { useContext } from "react";
import "./Main.css";
import OnPageScore from "./OnPageScore";
import DataContext from "../context/DataContext";
import NumberedData from "./NumberedData";
import Check from "./Check";
import Timing from "./Timing";

const Main = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="flex flex-center headers-head">
      <div className="m-auto w-100 text-center text-light">
        <h2>Result For</h2>
        <div className="flex flex-row">
          <h3>
            <img
              className="mx-3"
              src={data[0].result[0].items[0].meta.favicon}
              alt="logo"
            />
            {data[0].result[0].items[0].url}
          </h3>
        </div>
      </div>
      <OnPageScore score={data[0].result[0].items[0].onpage_score} />
      <div className="head ">
        <div className="main-data">
          <div className="additional-main-data">
            <div className="test ">
              <div className="data-value">
                {data[0].result[0].items[0].total_dom_size}
              </div>
              <h3>Total DOM size</h3>
            </div>
            <div className="test ">
              <div className="data-value">
                {data[0].result[0].items[0].size}
              </div>
              <h3>Size</h3>
            </div>
            <div className="test ">
              <div className="data-value">
                {data[0].result[0].items[0].click_depth}
              </div>
              <h3>Click Depth</h3>
            </div>
            <div className="test ">
              <div className="data-value">
                {data[0].result[0].items[0].total_transfer_size}
              </div>
              <h3>Total Transfer Size</h3>
            </div>
          </div>
        </div>
      </div>
      <NumberedData />
      <Check />
      <Timing/>
    </div>
  );
};

export default Main;
