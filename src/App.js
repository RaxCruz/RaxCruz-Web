import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NavTop from "./components/NavTop";
import Hero from "./components/Hero";
import Tool from "./components/Tool";
import Feature from "./components/Feature";
import Project from "./components/Project";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <NavTop />
          <Hero />
          <Tool />
          <Feature />
          <Project />
          <Gallery />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
