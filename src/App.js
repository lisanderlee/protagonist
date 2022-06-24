

import "./App.css";
import "./Sections/Sections.css";
import ModelHead from "./Model/Model";
import Stars from "./Model/Stars";
import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Callout from "./Sections/Section-Callout";
import CalloutProjects from "./Sections/Section-CalloutProjects";
import What from "./Sections/Section-What";
import Use from "./Sections/Section-Use";
import Work from "./Sections/Section-Work";
import Services from "./Sections/Section-Services";
import About from "./Sections/Section-About";
import Contact from "./Sections/Section-Contact";
import Footer from "./Footer/Footer";
import Proprietary from "./Sections/Section-proprietary";
import React, { useRef,Suspense, useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Experience from './Sections//Assets/Experience.gif'

export default function App() {
    const parallax = useRef();
    const cuadro = useRef();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      function watchScroll() {
        setScrollY(window.scrollY);
      }
      window.addEventListener("scroll", watchScroll);
      return () => {
        window.removeEventListener("scroll", watchScroll);
      };
    }, [setScrollY]);
  
  return (
    <div  >
      <Navbar scroll= {scrollY} />
      <Parallax ref={parallax} pages={5.9}>

        <ParallaxLayer offset={0} speed={0.7} factor={1}>
            <Intro />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1} factor={1}>
        <Suspense fallback={<div>Loading...</div>}>
            <ModelHead/>    
        </Suspense>
        </ParallaxLayer>

        <ParallaxLayer offset={0.999} speed={0.5} factor={0.1}>
          <Callout />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} sticky={{ start: 0, end: 6 }} style={{ zIndex: -50}}>
            <Stars />
        </ParallaxLayer>
        
        <ParallaxLayer offset={0} speed={1} sticky={{ start: 0, end: 6 }} style={{ zIndex: -100}}>
           <div className="bg"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} sticky={{ start: 0, end: 6 }} style={{ zIndex: -50}}>
           <div className="layer"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4} factor={0.5}>
          <What />
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={0.5} factor={0.5}>
          <Use />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.6} factor={0.5}>
            <Proprietary /> 
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} speed={0.2} factor={0.1} style={{ zIndex: 50}}>
          <CalloutProjects />
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} speed={0.7} factor={1}>
            <Work /> 
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.5} factor={1}>
            <Services /> 
        </ParallaxLayer>

        <ParallaxLayer offset={4.3} speed={0.6} factor={1}>
            <About /> 
        </ParallaxLayer>
    
        <ParallaxLayer offset={4.99} speed={0.5} factor={0.5}>
            <Contact /> 
        </ParallaxLayer>

        <ParallaxLayer offset={5.4} speed={0.2} factor={1}>
            <Footer /> 
        </ParallaxLayer>
      
      </Parallax>
    </div>
     
  )
}




