import React, { useContext } from "react";
import "./NumberedData.css";
import DataContext from "../context/DataContext";
const Timing = () => {
    const {data} = useContext(DataContext)
    const timing = Object.entries(data[0].result[0].items[0].page_timing);
  return (
  <>
  <div>
        <h1 className="center text-light">Page Timing</h1>
      </div>
    <div className="numDataContainer">
    {timing.map((i) => {
          return (
            <div className="numDataDisplayBox overflow-scroll" key={i[0]}>
              <div className="numDataDisplayBox-value">{i[1]}ms</div>
              <h4 className="numDataDisplayBox-key">
                {i[0]}
              </h4>
            </div>
          );
        })}
    </div>
  </>
  );
};

export default Timing;
