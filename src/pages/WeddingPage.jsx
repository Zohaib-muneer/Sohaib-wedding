import "./WeddingPage.css";
import MovingCurtains from '../components/MovingCurtains';
import Hero from "../sections/Hero/Hero";
import Events from "../sections/Events/Events";
import Venue from "../sections/Venue/Venue";
import Rsvp from "../sections/Rsvp/Rsvp";

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
      </div>
    </div>


  );
}
