import "./Hero.css";
import Breeze from "./BreezeBackground";
export default function Hero() {


  return (

    < div className="border-gradient">
      <div className="page-frame">
        <Breeze


          theme="crimson"       // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
          petalType="rose"      // 'rose' | 'marigold' | 'jasmine'
          showParticles={true}
          showPetals={true}
          showArch={true}
          showGarlands={true}      // Top swaying bridal flower garlands (Gajra/Haar)
          showJhumkas={true}       // Hanging swaying bridal jhumkas
          showPaisley={false}     // Side henna / mehndi paisley line-art
          showRings={false}        // Interlocked wedding rings drawing (great for RSVP/Hero)
          showStars={false}
          showLanterns={false}
          showHearts={false}
          showCorners={true}

        />
        <div className="bismillah">
          <h1 >{'\uFDFD'}</h1>
        </div>
        <div className="invited">
          <h2>Mr. & Mrs. Muneer </h2>
        </div>
        <div className="message">
          <p1>Joyfully invite you to the celebration of <br />their son's Walimma ceremony </p1>
        </div>
        <div className="bridale">
          <div className="bridale-text">Sohaib Muneer</div>
          <div className="bridale-text">with</div>
          <div className="bridale-text">D/O Akbar Ali</div>
          <div className="line"></div>
        </div>
        <div className="date">
          <div className="date-text">
            2026
          </div>
          <div className="date-text1">

            <p6>Saturday</p6>
            <p7>19</p7>
            <p8>December</p8>
          </div>
        </div>
        <div className="looking">
          <div className="looking-text">
            Looking forward
          </div>

          <div className="looking-text1">
            All Family Members
          </div>
        </div>

      </div>



    </div>


  );
}
