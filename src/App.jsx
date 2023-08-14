import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/Home";
import Casino from "./casino/Casino";
import MatchesBetting from "./matchesBetting/MatchesBetting";
import HowItWorks from "./howItWorks/HowItWorks";
import BettingFeatures from "./bettingFeatures/BettingFeatures";
import WantToWin from "./wantToWin/WantToWin";
import Clients from "./clients/Clients";
import Footballers from "./footballers/Footballers";
import Footer from "./footer/Footer";
import MatchesCard from "./MatchesCard/MatchesCard";
import BettingCards from "./bettingCards/BettingCards";
import MatchesCard2 from "./matchesCard2/MatchesCard2";
import MatchesCard3 from "./matchesCard3/MatchesCard3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="container mx-auto">
        <Navbar />
        <Home />
      </div>
      <div className="">
        <Casino />
      </div>
      <div className="container mx-auto">
        <MatchesBetting/>
      </div>
      <div className="">
        <HowItWorks/>
      </div>
      <div className="container mx-auto">
        <BettingFeatures/>
      </div>
      <div>
        <WantToWin/>
      </div>
      <div className="container mx-auto">
        <Clients/>
      </div>
      <div className="container mx-auto">
        <Footballers/>
        <Footer/>
      </div> */}




      {/* <div className="container mx-auto">
        <Navbar />
        <MatchesCard />
      </div>

      <div>
        <BettingCards />
      </div>

      <div className="container mx-auto">
        <MatchesCard2 />
        <Footer />
      </div> */}





      <div className="container mx-auto">
          <Navbar/>
          <MatchesCard3/>
          <Footer/>
      </div>
    </>
  );
}

export default App;
