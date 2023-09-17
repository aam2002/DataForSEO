import React, { useEffect } from "react";
import "./OnPageScore.css";

const OnPageScore = ({ score }) => {
  useEffect(() => {
    let progressBar = document.querySelector(".circular-progress");
    let valueContainer = document.querySelector(".value-container");

    let progressValue = 0;
    let progressEndValue = score;
    let speed = 10;

    let progress = setInterval(() => {
      progressValue = progressValue + 1;
      valueContainer.textContent = `${progressValue}%`;
      progressBar.style.background = `conic-gradient(
        rgb(37 246 0) ${progressValue * 3.6}deg,
        rgb(202 255 213) ${progressValue * 3.6}deg
          )`;
      if (progressValue === Math.round(progressEndValue)) {
        clearInterval(progress);
        valueContainer.textContent = `${progressEndValue}%`;
      }
    }, speed);
  }, []);
  return (
    <div className="container flex center">
      <div className="circular-progress">
        <div className="value-container">0%</div>
      </div>
      <h1 className="flex">On-Page Score</h1>
    </div>
  );
};

export default OnPageScore;
