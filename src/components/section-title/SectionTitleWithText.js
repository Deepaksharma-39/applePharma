import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Premier Pharmacy Solutions</h1>
          <p>
          At APPLE PHARMED, we are dedicated to transforming the landscape of healthcare by meeting pharmaceutical demands with a diverse range of safe OTC and life-saving formulations/medicines that prioritize both quality and affordability. Established with a commitment to enhancing access to essential medications, we stand as a beacon of trust and reliability in the pharmaceutical industry.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
