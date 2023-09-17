import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/UI/HeroSection";
import Services from "./components/UI/Services";
import Portfoilo from "./components/UI/Portfoilo";
import LetsConnectSection from "./components/UI/LetsConnectSection";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <Services />
        <Portfoilo />
        <LetsConnectSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
