import emailjs from "emailjs-com";
import { Fragment, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import GoogleMap from "../../components/google-map"
import SEO from "../../components/seo";
 import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  let { pathname } = useLocation();
  const captchaRef = useRef(null);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleRecaptchaVerify = () => {
    setRecaptchaVerified(true);
  };

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, email, phone, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
    
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      phone.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      // https://www.emailjs.com/
      emailjs
        .send(
          "", // service id
          "", // template id
          mailData,
          "" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", phone: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
    console.log("there")
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Contact", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {/* <div className="contact-map mb-10">
              <GoogleMap lat={28.657385278283538} lng={77.234138812721} />
            </div> */}
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+91 9999 6678 03</p>
                      <p>+91 8178 3070 47</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:contact@applepharmed.com">
                        contact@applepharmed.com
                        </a>
                      </p>
                      {/* <p>
                        <a href="https://yourwebsitename.com">
                          yourwebsitename.com
                        </a>
                      </p> */}
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>PROP NO. 1526, F/F, PVT. NO 122,</p>
                      <p>SHRINATHJI MARKET, BHAGIRATH PALACE,</p>
                      <p>CHANDNI CHOWK, DELHI 110006</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Connect With Us Today!</h2>
                  </div>
                  <form
                    className="contact-form-style"
                    autoComplete="off"
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    />
                    <div
                      className={error ? "empty_notice" : "returnmessage"}
                      style={{ display: error == null ? "none" : "block" }}
                    >
                      <span>
                        {error
                          ? "Please Fill Required Fields"
                          : "Your message has been received, We will contact you soon."}
                      </span>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          name="name"
                          placeholder="Name*"
                          type="text"
                          onChange={(e) => onChange(e)}
                          value={name}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="email"
                          placeholder="Email*"
                          type="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="phone"
                          placeholder="Contact*"
                          type="Number"
                          onChange={(e) => onChange(e)}
                          value={phone}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          onChange={(e) => onChange(e)}
                          value={message}
                        />

                          <ReCAPTCHA
                                sitekey="6LeiwmIpAAAAAKu99BWcJFS5rb74mslq__nUfwmk"
                                onChange={handleRecaptchaVerify}
                                />

                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
