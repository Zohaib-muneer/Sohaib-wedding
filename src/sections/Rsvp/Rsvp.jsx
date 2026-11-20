import "./Rsvp.css";
import Breeze from "../../components/backgrounds/BreezeBackground"
import RoyalRsvpHdBg from "../../components/backgrounds/RoyalRsvpHdBg";
export default function Rsvp() {
  return (
    <div className="bordersvp">
      <div className="rsvppage">
        <RoyalRsvpHdBg theme="burgundy" />
        <Breeze
      
                  theme="burgundy"       // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
                  petalType="marigold"      // 'rose' | 'marigold' | 'jasmine'
                  showParticles={true}
                  showPetals={true}
                  showWeddingShapes={true}
                  showArch={false}
                  showGarlands={false}      // Top swaying bridal flower garlands (Gajra/Haar)
                  showJhumkas={false}       // Hanging swaying bridal jhumkas
                  showPaisley={true}     // Side henna / mehndi paisley line-art
                  showRings={true}        // Interlocked wedding rings drawing (great for RSVP/Hero)
                  showStars={true}
                  showLanterns={false}
                  showHearts={true}
                  showCorners={true}
                
      />
        <div className="Rsvpheading">
          R.S.V.P
        </div>
        <div className="Rsvpmessage">
          We eagerly await the honor of hosting you please confirm your presence <br /> by Saturday, December 12, 2026
        </div>
        <div className="Rsvpcontact">
          <div className="Rsvtitlenames">
            <div className="name1">
              <div className="name">
                Muneer Ahmmad
              </div>
              <div className="contactnumber">
                Moible: +92 305 8117031
              </div>
            </div>
            <div className="name2">
              <div className="name">
                Omer Zulfiqar
              </div>
              <div className="contactnumber">
                Moible: +92 315 4246233
              </div>
            </div>
          </div>
          <div className="Subnames">
            <div className="Subnames1">
              Zohaib Muneer
            </div>
            <div className="Subnames2">
              Abaan Omer
            </div>
            <div className="Subnames3">
              Husain Omer
            </div>
            <div className="Subnames4">
              Mansoor Omer
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

