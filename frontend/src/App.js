import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./pages/Header";
import OverviewCard from "./pages/OverviewCard";

function App() {
  const [caffiene, setCaffiene] = useState(0);
  const getData = (data) => {
    setCaffiene(data);
  };

  return (
    <>
      <Header caffiene={caffiene} />
      <OverviewCard caffiene={caffiene} />
      <Home consume={getData} />
    </>
  );
}

export default App;
