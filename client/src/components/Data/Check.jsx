import React, { useContext } from "react";
import "./Check.css";
import DataContext from "../context/DataContext";
const Check = () => {
  const { data } = useContext(DataContext);
  const check = Object.entries(data[0].result[0].items[0].checks);
  return (
    <>
      <div>
        <h1 className="center text-light">Checks</h1>
      </div>
      <div className="checkContainer">
        {check.map((i) => {
          return (
            <div className="checkDisplayBox" key={i[0]}>
              <div className="checkDisplay-value">
                {i[1] ? (
                  <img src="images/accept.png" alt="" />
                ) : (
                  <img src="images/unchecked.png" alt="" />
                )}
              </div>
              <p>{i[0]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Check;
