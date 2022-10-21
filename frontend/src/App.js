import React, { useState } from "react";
import Home from "./pages/Home";
import Header from "./pages/Header";
import OverviewCard from "./pages/OverviewCard";

/* App function use for call chaild three components
   Here call three child components
   <Header />  where a put all header property like project title and progress bar
   <OverviewCard /> This component containd  all statistics information and progressbar
   <Home/> This component contains all products  and user profiles
*/


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
