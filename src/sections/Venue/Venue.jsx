import "./Venue.css";
import { FluidGlassButton } from "../../components/FluidGlassButton";
import Breeze from "../../components/backgrounds/BreezeBackground";
import RoyalMughalHdBg from "../../components/backgrounds/RoyalMughalHdBg";
export default function Venue() {
  return (
    <div className="bordervenue">
      <div className="venuepage">
        {/* <VenueMughalArch theme="midnight" /> */}
        <RoyalMughalHdBg theme="midnight" />
        <Breeze
          theme="midnight"       // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
          petalType="jasmine"      // 'rose' | 'marigold' | 'jasmine'
          showParticles={true}
          showPetals={true}
          showWeddingShapes={true}
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
          We look forward to welcoming you to an unforgettable afternoon.
        </div>
        <div className="venueaddress1">
          at Qasar-E-Nikkah
        </div>
        <div className="venueaddress2">
         near Sozo Water Park along the Canal Bank Road area / IBL Housing Scheme in Lahore.
        </div>
        <div className="Venuemap">
          
          <iframe
            title="Musa Marriage Hall Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.818320151562!2d74.4850230739032!3d31.584029643996885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919110044c69b57%3A0xf7f8b786040892da!2sQasar-E-Nikkah!5e0!3m2!1sen!2s!4v1795115852631!5m2!1sen!2s"
            allowFullScreen
            // className="w-100 h-100"
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="strict-origin-when-cross-origin"
          />

          <FluidGlassButton
            onClick={() => window.open("https://maps.app.goo.gl/5jQ3i4G2Ve7845it6", "_blank", "noopener,noreferrer")}

          />

        </div>

      </div>
    </div>

  );
};
