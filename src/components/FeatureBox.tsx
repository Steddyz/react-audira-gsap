import type { FeatureItem } from "../const";

const FeatureBox = ({ id, name, details }: FeatureItem) => {
  return (
    <div className="feature-box radius">
      <div className="feature-name">{name}</div>
      <div className="feature-detail">{details}</div>
    </div>
  );
};

export default FeatureBox;
