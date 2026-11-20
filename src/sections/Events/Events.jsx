import { useState, useEffect } from "react";
import "./Events.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import dinnericon from "../../assets/animations/dinnericon.lottie?url";
import receptionicon from "../../assets/animations/receptionicon.lottie?url";
import RoyalWalimaHdBg from "../../components/backgrounds/RoyalWalimaHdBg";
import Breeze from "../../components/backgrounds/BreezeBackground"
export default function Events() {


  return (

    < div className="borderevent">

      <div className="eventspage">
       
        <RoyalWalimaHdBg theme="emerald" />
        <Breeze
           theme = "emerald"       // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
  petalType = "marigold"      // 'rose' | 'marigold' | 'jasmine'
  showParticles = {true}
  showPetals = {true}
  showWeddingShapes = {true}
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

                src={receptionicon}
                loop
                autoplay
              />
            </div>
            <div className="lable"> Reception </div>
            <div className="time"> 12 pm </div>
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
            <div className="lable"> Lunch </div>
            <div className="time"> 2 pm </div>
          </div>
        </div>
      </div>
    </div>
  );
}
