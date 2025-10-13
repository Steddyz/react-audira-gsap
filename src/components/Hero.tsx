import { featureBox } from "../const";
import Button from "./Button";
import FeatureBox from "./FeatureBox";

const Hero = () => {
  return (
    <section>
      <div id="section1">
        <h1 className="heading">Modern Harmony</h1>
      </div>
      <div id="section2">
        <div className="content-wrapper">
          <h2 className="heading">True Carity</h2>
          <p>
            Engineered for clarity, comfort, and immersive sound — Audira
            redefines your listening experience with style and performance in
            perfect harmony.
          </p>
          <Button />
        </div>
        <div className="feature-wrapper">
          {featureBox.map((item) => (
            <FeatureBox id={item.id} name={item.name} details={item.details} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
