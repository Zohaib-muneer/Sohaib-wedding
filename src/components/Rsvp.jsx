import "./Rsvp.css";
import Breeze from "./BreezeBackground"
export default function Rsvp() {
  return (
    <div className="bordersvp">
      <div className="rsvppage">
        <Breeze
      
                  theme="burgundy"       // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
                  petalType="marigold"      // 'rose' | 'marigold' | 'jasmine'
                  showParticles={true}
                  showPetals={true}
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
                Umer Zulfiqar
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
              Abaan Umer
            </div>
            <div className="Subnames3">
              Husain Umer
            </div>
            <div className="Subnames4">
              Mansoor Umer
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

