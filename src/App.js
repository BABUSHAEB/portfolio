import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/UI/HeroSection";
import Services from "./components/UI/Services";
import Portfoilo from "./components/UI/Portfoilo";
import ContactForms from "./components/Forms/ContactForms";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div>
        <Header />
        <main className="container">
          <HeroSection />
          <Services />
          <Portfoilo />
          <ContactForms />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
