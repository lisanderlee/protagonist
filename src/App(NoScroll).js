import React, { Suspense } from "react"
import "./App.css";
import ModelHead from "./Model/Model";
import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Callout from "./Sections/Section-CalloutProjects";
import What from "./Sections/Section-What";
import Use from "./Sections/Section-Use";
import Work from "./Sections/Section-Work";
import Services from "./Sections/Section-Services";
import About from "./Sections/Section-About";
import Contact from "./Sections/Section-Contact";
import Footer from "./Footer/Footer";
import Proprietary from "./Sections/Section-proprietary";
import {useEffect, useState, useRef } from 'react'



function App() {
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    const handleScroll = event => {
      setScrollPosition(root.window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>  
        <Navbar scroll= {scrollPosition} />
        <Intro />
        <Suspense fallback={<div>Loading...</div>}>
            <ModelHead/>    
        </Suspense>
        <div className="fondo" >
        <Callout />
        <What />
        <Use />
        <Proprietary />   
        <Work />
        <Services />
        <About />
        <Contact />
        <Footer />
        <div className="bg" />
        <div className="layer" />
        </div>  
    </>
  );
}
export default App;


