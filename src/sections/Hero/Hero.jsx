import "./Hero.css";
import Breeze from "../../components/backgrounds/BreezeBackground";
import CenterWeddingMandala from "../../components/backgrounds/CenterWeddingMandala";

export default function Hero() {
  return (
    <div className="border-gradient">
      <div className="page-frame">
        {/* Moving Center Wedding Element */}
        <CenterWeddingMandala theme="crimson" />
        {/* <CenterWeddingShape theme="crimson" /> */}
        {/* <BrideIllustration theme="midnight" /> */}

        <Breeze
          theme="crimson" // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
          petalType="rose" // 'rose' | 'marigold' | 'jasmine'
          showParticles={true}
          showPetals={true}
          showWeddingShapes={true}
          showArch={true}
          showGarlands={true}
          showJhumkas={true}
          showPaisley={false}
          showRings={false}
          showStars={false}
          showLanterns={false}
          showHearts={false}
          showCorners={true}
        />

        <div className="bismillah">
          <h1>{"\uFDFD"}</h1>
        </div>

        <div className="invited">
          <h2>Mr. &amp; Mrs. Muneer</h2>
        </div>

        <div className="message">
          <p1>
            Joyfully invite you to the celebration of <br />
            their son&apos;s Walima ceremony
          </p1>
        </div>

        <div className="bridale">
          <div className="bridale-text">Sohaib Muneer</div>
          <div className="bridale-text">with</div>
          <div className="bridale-text">D/O Akbar Ali</div>
          <div className="line"></div>
        </div>

        <div className="date">
          <div className="date-text">2026</div>
          <div className="date-text1">
            <p6>Sunday</p6>
            <p7>20</p7>
            <p8>December</p8>
          </div>
        </div>

        <div className="looking">
          <div className="looking-text1">Looking forward</div>
          <div className="looking-text2">All Family Members</div>
        </div>
      </div>
    </div>
  );
}