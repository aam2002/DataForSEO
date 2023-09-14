import express from "express";
import axios from "axios";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

//config env
dotenv.config();

//rest object
const app = express();

//middelwares
app.use(express.json());
app.use(cors());

//routes
app.post("/", (req, res) => {
//   const url = req.body;
  const post_array = [];
  post_array.push({
    target: "dataforseo.com",
    max_crawl_pages: 10,
   "enable_javascript": "enabled",
    "load_resources":"enabled",
    "enable_browser_rendering":"enabled",
    tag: "some-str",
    "pingback_url": `https://www.youtube.com/`,
  });
  axios({
    method: "post",
    url: "https://api.dataforseo.com/v3/on_page/task_post",
    auth: {
      username: `${process.env.LOGIN}`,
      password: `${process.env.PASSWORD}`,
    },
    data: post_array,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      var result = response["data"]["tasks"];
      try {
        res.status(200).send(result);
      } catch (error) {
        res.status(404).send(`something is wrong in the result`);
      }
      //Result data
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

//host
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`.blue);
});
