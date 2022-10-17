// Copyright NorthStar Development 🕵🏻‍♂️ 2022 
// 17 U.S.C §§ 101-1511



//components
import Navbar from "./components/navbar/navbar";
import SplashSection from "./components/splash-section/splash-section";
import SplashBottom from "./components/splash-section/splash-bottom";
import About from "./components/about/about";
import Services from "./components/services/services";
import Achievements from "./components/achievements/achievements";
import OfferList from "./components/offer/offer";
import HowWeWork from "./components/how-we-work/work";
import Teams from "./components/teams/teams";
import Clients from "./components/clients/clients";
import Contacts from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { useEffect, useRef, useState } from 'react';
import Preloader from "./components/preloader/preloader";

//importing relevant modules

// JSX Root/Home Component
function App() {
  const refScroll = useRef(null);
  const [load, setLoad] = useState(false);
  
  useEffect(() => {
    // locomotiveScroll.destroy();
     
  
    
  }, [])
  return (
    <div className="App" data-scroll-container ref={refScroll}>
      <Preloader/>
      <Navbar />
      <SplashSection />
      <SplashBottom />
      <About />
      <Services/>
      <Achievements/>
      <OfferList />
      <HowWeWork/>
      <Teams />
      <Clients />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
