import React from "react";
import "../src/style.css";
import NavigasiBar from "./component/NavigasiBar";
import Fotter from "./component/Fotter";
import Card from "./component/Card";
import Content2 from "./component/Content2";
import Content1 from "./component/Content1";
import FotterUp from "./component/FotterUp";

function App() {
  return (
    <div className="con">
      <NavigasiBar />
      {/* <Navigation /> */}

      <div className="main">
        <Content1 />
        <Content2 />
        <Card />
        <FotterUp />
        <Fotter />
      </div>
    </div>
  );
}

export default App;
