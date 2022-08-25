import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";
import CustomModal from "../UI/CustomModal";

export const EmailForm = (props) => {
  const form = useRef();
  const [contactModal, setContactModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kdko7i1",
        "template_jhf28lp",
        form.current,
        "mxrICz-G37a1MgqFA"
      )
      .then(
        (result) => {
          console.log(result);
          modalOpen(result.status);
        },
        (error) => {
          console.log(error);
        }
      );

    form.current[0].value = "";
    form.current[1].value = "";
    form.current[2].value = "";
  };

  const modalClose = () => {
    setContactModal(false);
  };

  const modalOpen = (value) => {
    if (value === 200) {
      setModalTitle("Your Email Have Been Sent")
      setModalBody(
          <p>Your email is successfully sent, please wait for my response.</p>
      )
    }

    setContactModal(true);
  };

  return (
    <form className="emailform" ref={form} onSubmit={sendEmail}>
      {contactModal ? <CustomModal closeModal={modalClose} title={modalTitle}>{modalBody}</CustomModal> : ""}
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="user_message" />
      <input className="emailform-button" type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;
