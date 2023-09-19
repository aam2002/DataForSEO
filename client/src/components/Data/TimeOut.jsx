import React from "react";
import { useNavigate } from "react-router-dom";
const TimeOut = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="full-height">
        <div>
          <div className="flex flex-center">
            <h1 className="flex flex-column text-danger">
              Error Occured
              <p className="fs-5 text-white">
                Took to much Time to get the data{" "}
              </p>
              <button className="btn btn-light" onClick={() => navigate("/")}>
                Go Back
              </button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeOut;
