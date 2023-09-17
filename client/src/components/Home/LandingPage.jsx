import React, { useState, useContext } from "react";

import DataContext from "../context/DataContext";
import TakePost from "../Api/ApiCall";

const LandingPage = () => {
  const [input, setInput] = useState("");
  const { setInputurl } = useContext(DataContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    setInputurl(input.replace('https://', ""));
    TakePost();
  };
  return (
    <div>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control "
          placeholder="https://enter_url.com"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-success input-group-lg input-group mt-4"
        onClick={handleSubmit}
      >
        Get Data
      </button>{" "}
    </div>
  );
};

export default LandingPage;
