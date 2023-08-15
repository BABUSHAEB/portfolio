import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/UI/HeroSection";
import Services from "./components/UI/Services";
import Portfoilo from "./components/UI/Portfoilo";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <HeroSection />
          <Services />
          <Portfoilo />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
