import React from "react";
import { Navbar, Hero, Footer, NavMob } from "./components/Component";
import Services from "./constants/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      
    </div>
  );
};

export default App;
