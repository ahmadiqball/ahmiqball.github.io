import React from "react";
import "./Contacts.css";
import contactImg from "../../assets/img/contact-img.svg";
import EmailForm from "./EmailForm";


const Contacts = () => {
  // const [ctChoice, setCtChoice] = useState("email");


  // const selectContact = (value) => {
  //   setCtChoice(value);
  // };

  

  return (
    <React.Fragment>
      
    <section className="contacts" id="contacts">
      <img src={contactImg} alt="contact-img" />
      <div className="contacts-action">
        <h1>Get in Touch</h1>
        {/* <div className="contacts-choice">
          <button
            onClick={() => selectContact("email")}
            className={ctChoice === "email" ? "choice-active" : ""}
          >
            Email
          </button>
          <button
            onClick={() => selectContact("whatsapp")}
            className={ctChoice === "whatsapp" ? "choice-active" : ""}
          >
            Whatsapp
          </button>
        </div> */}
        <div className="contacts-form">
          {/* {ctChoice === "email" ? <EmailForm /> : <div></div>} */}
          <EmailForm />
        </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Contacts;
