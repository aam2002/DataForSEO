import React, { useState, useContext, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import Main from "../Data/Main";
import Buffer from "../Data/Buffer";
// import DataContext from "../context/DataContext";
// import TakePost from "../Api/ApiCall";

const LandingPage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [gotData, setGotData] = useState(false);

  const { setData, data } = useContext(DataContext);


  const handleChange = (e) => {
    setInput(e.target.value);
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
                console.log(r_id.result);
                if (pending === false) {
                  GetData(r_id.result);
                  clearInterval(checking);
                }
              });
          }, 45000);
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
            console.log("getting");
            if (result[0].status_message === "Ok.") {
               setData(result);
              console.log(data);
              setGotData(true);
              clearInterval(getingdata);
            }
            if (result[0].status_code === 50402) {
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
    <div>
      {isLoading ? (
        gotData ? (
          <Main />
        ) : (
          <Buffer />
        )
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default LandingPage;
