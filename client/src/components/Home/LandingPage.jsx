import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import Main from "../Data/Main";
import Buffer from "../Data/Buffer";


const LandingPage = () => {
  const navigate = useNavigate();
  const { setData } = useContext(DataContext);
  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [gotData, setGotData] = useState(false);
  
  const handleChange = (e) => {
    setInput(e.target.value);
    localStorage.removeItem("result");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("https://dataforseoserver-production.up.railway.app/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ url: input }),
      })
        .then((response) => response.json())
        .then(async (r_id) => {
          console.log(r_id.result);
          const checking = setInterval(() => {
            fetch("https://dataforseoserver-production.up.railway.app/check", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: r_id.result }),
            })
              .then((response) => response.json())
              .then((pending) => {
                if (pending === false) {
                  GetData(r_id.result);
                  clearInterval(checking);
                }
              });
          }, 30000);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const GetData = async (id) => {
    try {
      const getingdata = setInterval(async () => {
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
          .then((result) => {
            if (result[0].status_message === "Ok.") {
              setData(result);
              setGotData(true);
              clearInterval(getingdata);
            }
            if (result[0].status_code === 50402) {
              navigate("/timeout");
              clearInterval(getingdata);
            }
            if (result[0].status_code === 40201) {
              navigate("/timeout");
              clearInterval(getingdata);
            }
          });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoading ? (
        gotData ? (
          <Main />
        ) : (
          <Buffer />
   
        )
      ) : (
        <>
          <div className="full-height">

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
          </div>
        </>
      )}
    </>
  );
};

export default LandingPage;
