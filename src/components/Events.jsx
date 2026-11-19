import { useState, useEffect } from "react";
import "./Events.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import dinnericon from "../assets/dinnericon.lottie?url";
import receptionicon from "../assets/receptionicon.lottie?url";
import Breeze from "./BreezeBackground"
export default function Events() {


  return (

    < div className="borderevent">

      <div className="eventspage">
        <Breeze
           theme = "emerald"       // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
  petalType = "marigold"      // 'rose' | 'marigold' | 'jasmine'
  showParticles = {true}
  showPetals = {true}
  showArch = {false}
  showGarlands = {true}      // Top swaying bridal flower garlands (Gajra/Haar)
  showJhumkas ={false}       // Hanging swaying bridal jhumkas
  showPaisley = {true}     // Side henna / mehndi paisley line-art
  showRings = {false}        // Interlocked wedding rings drawing (great for RSVP/Hero)
  showStars = {false}
  showLanterns = {true}
  showHearts ={false}
  showCorners = {true}
        
        />
        <div className="Eventheading">
          Walima
        </div>
        <div className="Eventinvited">
          <div>Mr. & Mrs. Muneer </div>
        </div>
        <div className="Eventmessage">
          <h17>joyfully invite your gracious presence <br />and prayers at the Walima ceremony <br />of their son</h17>

        </div>
        <div className="Eventtime">
          <div className="reception">
            <div className="icon">

              <DotLottieReact
                // src="..\src\assets\7KE8BpMdCo.lottie" ,           s
                src={receptionicon}
                loop
                autoplay
              />
            </div>
            <div className="lable"> Reception </div>
            <div className="time"> 12 am </div>
          </div>
          <div className="eventline"></div>
          <div className="dinner">
            <div className="icon">
              <DotLottieReact
                // src="..\src\assets\7KE8BpMdCo.lottie" ,           s
                src={dinnericon}
                loop
                autoplay
              />
            </div>
            <div className="lable"> Dinner </div>
            <div className="time"> 12 am </div>
          </div>
        </div>
      </div>
    </div>
  );
}
