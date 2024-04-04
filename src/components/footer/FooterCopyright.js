import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div className={clsx("copyright", spaceBottomClass, colorClass)}>
       <p>
      By <a href='https://www.techplek.com/'>TechPlek Technologies</a>
      </p>
      <div className="footer-logo">
        <Link to={"/"}>
          <img alt="" src={process.env.PUBLIC_URL + footerLogo} />
        </Link>
      </div>
      <p>
        {/* &copy; {new Date().getFullYear()}{" "} */}
          ApplePharmed
        .<br /> All Rights Reserved
      </p>
     
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
