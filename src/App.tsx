//components
import Navbar from "./components/navbar/navbar";
import SplashSection from "./components/splash-section/splash-section";
import SplashBottom from "./components/splash-section/splash-bottom";
import About from "./components/about/about";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SplashSection />
      <SplashBottom />
      <About />
    </div>
  );
}

export default App;
