import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";
import Main from "./components/Data/Main";
import DataContextProvider from "./components/context/DataContextProvider";
import Scaning from "./components/Data/Scaning";
function App() {
  return (
    <div className="App">
        <DataContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/data" element={<Main />} />
          <Route path="/scaning" element={<Scaning />} />
        </Routes>
    </DataContextProvider>
      </div>
  );
}

export default App;
