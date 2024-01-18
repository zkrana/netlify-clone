// components/Contact.jsx

import React from "react";
import "./contact.css";
import ContactContent from "./ContactContent";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div className="contact-wrapper">
      <div className="container max-w-7xl mx-auto mt-[72px] text-center py-14">
        <div className="contact lg:max-w-4xl w-[90%] mx-auto flex flex-wrap gap-8">
          <ContactContent />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
