import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Casino from "./casino/Casino";
import MatchesBetting from "./matchesBetting/MatchesBetting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Home />
      </div>
      <div className="">
        <Casino />
      </div>
      <div className="container mx-auto">
        <MatchesBetting/>
      </div>
    </>
  );
}

export default App;
