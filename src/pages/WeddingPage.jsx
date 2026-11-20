import { useState, useEffect } from "react";
import "./WeddingPage.css";
import { AnimatedBackground } from 'animated-backgrounds'
import { LayeredBackground } from 'animated-backgrounds'
import MovingCurtains from '../components/MovingCurtains';
import Hero from "../sections/Hero/Hero";
import Events from "../sections/Events/Events";
import Venue from "../sections/Venue/Venue";
import Rsvp from "../sections/Rsvp/Rsvp";

const layers = [
  { animation: 'starryNight', opacity: 0.8, blendMode: 'normal', speed: 0.5 },
  { animation: 'cosmicDust', opacity: 0.6, blendMode: 'screen', speed: 1.0 },
  { animation: 'auroraBorealis', opacity: 0.4, blendMode: 'overlay', speed: 1.5 }
];
export default function Pageswrapper() {


  return (
    <div>

      <div className="page-wrapper">
        <MovingCurtains mode="open">
          <div className="insidewraper">
            
          <Hero/>
          <Events/>
          <Venue/>
          <Rsvp/>
          </div>
          </MovingCurtains>
        {/* <AnimatedBackground
          animationName="snowFall"
        theme="remove"
        // interactive={true}
        // enablePerformanceMonitoring={true}
        /> */}

        {/* <LayeredBackground layers={layers} /> */}


      </div>
    </div>


  );
}
