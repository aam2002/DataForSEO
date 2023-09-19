import React, { useContext } from "react";
import "./NumberedData.css";
import DataContext from "../context/DataContext";

const NumberedData = () => {
  const { data } = useContext(DataContext);
  const content = Object.entries(data[0].result[0].items[0].meta.content);

  return (
    <>
      <div>
        <h1 className="center text-light">Numbered Data</h1>
      </div>
      <div className="numDataContainer">
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.internal_links_count}
          </div>
          <h4 className="numDataDisplayBox-key">Internal links Count</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.external_links_count}
          </div>
          <h4 className="numDataDisplayBox-key">External links Count</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.inbound_links_count}
          </div>
          <h4 className="numDataDisplayBox-key">Inbound links Count</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.images_count}
          </div>
          <h4 className="numDataDisplayBox-key">Image Count</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.images_size}
          </div>
          <h4 className="numDataDisplayBox-key">Image size</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.scripts_count}
          </div>
          <h4 className="numDataDisplayBox-key">Script Count</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.scripts_size}
          </div>
          <h4 className="numDataDisplayBox-key">Script Size</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.stylesheets_count}
          </div>
          <h4 className="numDataDisplayBox-key">Stylesheets count</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.stylesheets_size}
          </div>
          <h4 className="numDataDisplayBox-key">Stylesheets Count</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.render_blocking_scripts_count}
          </div>
          <h4 className="numDataDisplayBox-key">
            Render blocking scripts Count
          </h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.render_blocking_stylesheets_count}
          </div>
          <h4 className="numDataDisplayBox-key">Render blocking stylesheets</h4>
        </div>
        <div className="numDataDisplayBox">
          <div className="numDataDisplayBox-value">
            {data[0].result[0].items[0].meta.cumulative_layout_shift}
          </div>
          <h4 className="numDataDisplayBox-key">Cumulative layout Shift</h4>
        </div>
      </div>
      <div>
        <h1 className="center text-light">Index</h1>
      </div>
      <div className="numDataContainer">
        {content.map((i) => {
          return (
            <div className="numDataDisplayBox overflow-scroll" key={i[0]}>
              <div className="numDataDisplayBox-value">{i[1]}</div>
              <h4 className="numDataDisplayBox-key">
                {i[0].replace("_", " ")}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NumberedData;
