//components
import Navbar from "./components/navbar/navbar";
import SplashSection from "./components/splash-section/splash-section";
import SplashBottom from "./components/splash-section/splash-bottom";
import About from "./components/about/about";
import Services from "./components/services/services";
import Achievements from "./components/achievements/achievements";
import OfferList from "./components/offer/offer";
import HowWeWork from "./components/how-we-work/work";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SplashSection />
      <SplashBottom />
      <About />
      <Services/>
      <Achievements/>
      <OfferList />
      <HowWeWork/>
    </div>
  );
}

export default App;
