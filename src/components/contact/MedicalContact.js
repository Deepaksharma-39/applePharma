import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MedicalContact = () => {
    return (
      <div
        className="medical-contact-area bg-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL
          })`
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
              <div className="medical-contact-text">
                <h3>Immediate Help?</h3>
                <h2>Contact Now!</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  <div className="medical-shape-img">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/icon-img/medical-contact-shape.png"
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-9 col-md-10">
                  <div className="medical-contact-number-wrap">
                    <div className="medical-contact-img">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icon-img/what1.webp"
                        }
                        alt=""
                      />
                    
                    </div>                    
                    <div className="medical-contact-number">                
                      <h2><div className="medical-contact-img">
                      {/* <img 
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icon-img/what1.webp"
                        }
                        alt=""
                      /> */}
                    
                    </div>+91 9999 6678 03</h2>
                      <h2>+91 8178 3070 47</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MedicalContact;
  