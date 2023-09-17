import React, { useState } from "react";
import DataContext from "./DataContext";
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [inputurl, setInputurl] = useState("");
  const [id, setId] = useState("");
  return (
    <DataContext.Provider
      value={{ data, setData, inputurl, setInputurl, id, setId }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
