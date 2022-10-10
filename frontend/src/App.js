import React from "react";
import Home from "./pages/Home";
import Header from "./component/dashboard/Header";
import OverviewCard from "./pages/OverviewCard";

function App() {
  return (
    <>
      <Header />
      <OverviewCard />
      <Home />
    </>
  );
}

export default App;
