import React from "react";
import Line from "../Line/Line";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="mt-16 px-4">
      <h2 className="text-start text-2xl mb-5">Contact Me</h2>
      <Line />
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
