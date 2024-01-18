import React from "react";
import "./contact.css";
// Reusable form field component
function FormField({ label, type, name, options }) {
  const commonInputProps = {
    className: "w-full h-11 pl-3 border border-black rounded mt-1",
    name,
  };

  return (
    <div className="form-group">
      <label htmlFor={name} className="block text-sm font-light">
        {label}
      </label>

      {type === "select" ? (
        <select {...commonInputProps}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea {...commonInputProps} />
      ) : (
        <input type={type} {...commonInputProps} />
      )}
    </div>
  );
}

// Main Form component
function Form() {
  const formFields = [
    { label: "First Name", type: "text", name: "first_name" },
    { label: "Last Name", type: "text", name: "last_name" },
    { label: "Business Email", type: "email", name: "email" },
    { label: "Company", type: "text", name: "company" },
    {
      label: "Company Size",
      type: "select",
      name: "company_size",
      options: [
        { label: "1-10", value: "1-10" },
        { label: "11-50", value: "11-50" },
        { label: "51-100", value: "51-100" },
      ],
    },
    { label: "Company Size", type: "textarea", name: "companysize" },
  ];

  return (
    <form className="mt-3 flex gap-5 flex-col">
      {formFields.map((field) => (
        <FormField key={field.name} {...field} />
      ))}
      <div className="footer-form mt-4">
        <p className="text-sm font-light">
          By submitting this form, you agree to Netlify’s{" "}
          <a href="" className="underline">
            Privacy Policy
          </a>
          , and that Netlify can send you communications about its products and
          services.
        </p>
        <button
          type="submit"
          class="sm:text-base mt-3 text-base px-5 w-full h-10 rounded-md bg-[#32E6E2]
           hover:bg-[#59fbf3] transition-colors font-semibold capitalize text-[#014847]"
        >
          Talk to netlify
        </button>
      </div>
    </form>
  );
}

export default Form;
