//components
import Navbar from "./components/navbar/navbar";
import SplashSection from "./components/splash-section/splash-section";
import SplashBottom from "./components/splash-section/splash-bottom";
import About from "./components/about/about";
import Services from "./components/services/services";
import Achievements from "./components/achievements/achievements";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SplashSection />
      <SplashBottom />
      <About />
      <Services/>
      <Achievements/>
    </div>
  );
}

export default App;
