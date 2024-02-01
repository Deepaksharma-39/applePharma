import { useState } from "react";
import { Modal } from "react-bootstrap";
import emailjs from "emailjs-com";

const Popup = ({ show, onHide }) => {
  //   const [modalShow, setModalShow] = useState(false);
  //   onHide={() => setModalShow(false)}

  const onCloseModal = () => {
    onHide();
  };

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    phone:"",
    pincode:"",
    message: "",
  });
  const { name,email,phone,pincode,message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0|| phone.length===0) {
      setError(true);
      clearError();
    } else {
      // https://www.emailjs.com/
      emailjs
        .send(
          "service_rov9rsr", // service id
          "template_jn2athu", // template id
          mailData,
          "FVUuziJEgVNeVfSaD" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "",phone:"", pincode:"" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="contact-form">
        <div className="contact-title mb-30">
          <h2>Product Enquiry Form </h2>
        </div>
        <form className="contact-form-style" 
                    autoComplete="off"
                    onSubmit={(e) => onSubmit(e)}>
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
              <input name="name" placeholder="Name*" type="text"  onChange={(e) => onChange(e)}  value={name} required />
            </div>
            <div className="col-lg-6">
              <input name="email" placeholder="Email*" type="email"  onChange={(e) => onChange(e)} value={email} required />
            </div>
            <div className="col-lg-6">
              <input
                name="phone"
                placeholder="Phone*"
                type="number"
                onChange={(e) => onChange(e)}
                value={phone}
                required
              />
            </div>
            <div className="col-lg-6">
              <input
                name="pincode"
                placeholder="Pincode*"
                type="number"
                onChange={(e) => onChange(e)}
                value={pincode}
                required
              />
            </div>
            <div className="col-lg-12">
              <input 
                name="message"
                placeholder="message*"
                type="text"
                onChange={(e) => onChange(e)}
                value={message}
                required
              />
            </div>
            <div className="col-lg-12">
              <p>
                Hello! Fill this form and we will get back to you will all the
                necessary details.
              </p>
              <button className="submit" type="submit">
                SEND
              </button>
            </div>
          </div>
        </form>
        <p className="form-message" />
      </div>
    </Modal>
  );
};

export default Popup;