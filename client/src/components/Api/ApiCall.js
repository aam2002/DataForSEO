import{ useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const TakePost = async () => {
  const { inputurl, setId} = useContext(DataContext);
  const navigate = useNavigate();
  await fetch("http://localhost:3030/data", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(inputurl),
  })
    .then((response) => response.json())
    .then((r_id) => {
      navigate("/scaning");
      setId(r_id);
      console.log(r_id)
      GetData();
    });
};
const GetData = async () => {
  const navigate = useNavigate();
  const {id, setData } = useContext
  await fetch("http://localhost:3030/data", {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then(async (result) => {
      await setData(result);
      console.log(result)
      navigate("/data");
    });
};

export default TakePost;
