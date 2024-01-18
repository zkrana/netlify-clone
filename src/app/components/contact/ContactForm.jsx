import React from "react";
import Form from "./Form";

function ContactForm() {
  return (
    <div className="px-6 py-8 bg-white text-left rounded-lg sm:w-[calc(58%-16px)] w-full">
      <h2 className="xl:text-4xl lg:text-2xl text-base font-bold">
        Get in touch with Sales
      </h2>
      <Form />
    </div>
  );
}

export default ContactForm;
