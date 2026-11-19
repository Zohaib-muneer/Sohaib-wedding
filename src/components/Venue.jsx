import "./Venue.css";
import { FluidGlassButton } from "./FluidGlassButton";
import Breeze from "./BreezeBackground"
export default function Venue() {
  return (
    <div className="bordervenue">
      <div className="venuepage">
        <Breeze
          theme="midnight"       // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
          petalType="jasmine"      // 'rose' | 'marigold' | 'jasmine'
          showParticles={true}
          showPetals={true}
          showArch={true}
          showGarlands={false}      // Top swaying bridal flower garlands (Gajra/Haar)
          showJhumkas={false}       // Hanging swaying bridal jhumkas
          showPaisley={true}     // Side henna / mehndi paisley line-art
          showRings={false}        // Interlocked wedding rings drawing (great for RSVP/Hero)
          showStars={true}
          showLanterns={false}
          showHearts={true}
          showCorners={true}
        />
        <div className="Venueheading">
          VENUE
        </div>
        <div className="Venuemessage">
          We look forward to welcoming you to an unforgettable evening.
        </div>
        <div className="venueaddress">
          at musa merrage hall, 1234 Main Street, Cityville, State, 12345
        </div>
        <div className="Venuemap">
          <iframe
            title="Musa Marriage Hall Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.606392466761!2d74.3940382!3d31.562415100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190551e06bab69%3A0xa87d0ce4f1c3ebbb!2sMusa%20Marriage%20Hall!5e0!3m2!1sen!2s!4v1794827378768!5m2!1sen!2s"
            allowFullScreen
            // className="w-100 h-100"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <FluidGlassButton
            onClick={() => window.open("https://maps.app.goo.gl/6sBpRyTcmisUmq669", "_blank", "noopener,noreferrer")}

          />

        </div>

      </div>
    </div>

  );
};
