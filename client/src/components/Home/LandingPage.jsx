import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

// import DataContext from "../context/DataContext";
// import TakePost from "../Api/ApiCall";

const LandingPage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [id, setId] = useState("");

  const { setData } = useContext(DataContext);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://dataforseoserver-production.up.railway.app/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ url: input }),
      })
        .then((response) => response.json())
        .then((r_id) => {
          navigate("/scaning");
          setId(`${r_id.result}`);
          console.log(`${r_id.result}`);
          const checking = setInterval(() => {
            fetch("https://dataforseoserver-production.up.railway.app/check", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: id }),
            })
              .then((response) => response.json())
              .then((pending) => {
                console.log(id)
                if (pending === true) {
                  GetData();
                  clearInterval(checking);
                }
                navigate("/scaning");
              });
          }, 3000);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const GetData = async () => {
    try {
      await fetch(
        "https://dataforseoserver-production.up.railway.app/FinalData",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ id: id }),
        }
      )
        .then((response) => response.json())
        .then(async (result) => {
          await setData(result);
          console.log(result);
          navigate("/data");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control "
          placeholder="https://enter_url.com"
          value={input}
          onChange={handleChange}
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
