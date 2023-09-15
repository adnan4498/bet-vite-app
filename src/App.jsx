import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes  , useLocation} from "react-router-dom";
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
import InstantAction from "./instantAction/InstantAction";
import AllMatches from "./pages/AllMatches";
import Login from "./pages/Login";
import MatchesCard4 from "./matchesCard4/MatchesCard4";
import CasinoNav from "./casinoNav/CasinoNav";
import Stats from "./stats/Stats";
import OtherGames from "./othergames/OtherGames";

function App() {

  const [isHidden, setIsHidden] = useState(false)
  const [isTransform, setIsTransform] = useState(false)

  const location = useLocation();



  return (
    <>
   <div>
      {location.pathname !== '/Casino/dashboard' && (
        <Navbar setIsHidden={setIsHidden} isHidden={isHidden} setIsTransform={setIsTransform} isTransform={isTransform} />
      )}
      <Routes>
        <Route path="/Casino" element={<Home setIsHidden={setIsHidden} isHidden={isHidden} setIsTransform={setIsTransform} isTransform={isTransform} />} />
        <Route path="/Casino/Login" element={<Login />} />
        <Route path="/Casino/Cricket" element={<MatchesCard3 />} />
        <Route path="/Casino/football" element={<MatchesCard4 />} />
        <Route path="/Casino/matches" element={<AllMatches />} />
        <Route path="/Casino/casinonav" element={<CasinoNav />} />
        <Route path="/Casino/othergames" element={<OtherGames />} />
      </Routes>
      {location.pathname !== '/Casino/dashboard' && <Footer />}
      
      <Routes>
        <Route path="/Casino/dashboard" element={<Stats />} setIsHidden={setIsHidden} setIsTransform={setIsTransform} />
      </Routes>
    </div>


      {/* <div className="">
       
        <Home />
      </div> */}
      {/* <div>
        <InstantAction />
      </div>

      <div className="">
        <MatchesBetting />
      </div>

      <div className="">
        <Casino />
      </div>

      <div className="">
        <HowItWorks />
      </div>

  
      <div className="">
        <BettingFeatures/>
      </div>
       <div>
        <WantToWin/>
      </div>
    

 
      <div className="">
        <Clients/>
      </div>

      <div className="">
        <Footballers/>
        </div>
        
      
        <MatchesCard />

        <BettingCards />
  
        <MatchesCard2 />
        
        <div className="2xl:container 2xl:mx-auto ">
        <MatchesCard3/>
        </div> */}
      {/* <Footer /> */}

      {/*
        <div className="container mx-auto">
        <MatchesCard3/>
        </div>
        <Footer/>
      </div>   */}

      {/* <div className="">
        <Navbar />
      </div>
        <MatchesCard />

      <div>
        <BettingCards />
      </div>

      <div className="">
        <MatchesCard2 />
        <Footer />
      </div> */}

      {/* <div className="container mx-auto">
          <Navbar/>
          <MatchesCard3/>
          <Footer/>
      </div> */}
    </>
  );
}

export default App;
