import React, { useState } from "react";

const ContactForms = () => {
  const [formValues, setFormValues] = useState([]);
  const [formValidation, setFormValidation] = useState({});

  // form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // formvalidation
  const validateForm = (values) => {
    const errors = {};

    const nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    } else if (!nameRegex.test(values.firstName)) {
      errors.firstName = "Please enter a valid First Name";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    } else if (!nameRegex.test(values.firstName)) {
      errors.firstName = "Please enter a valid Last Name";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid Email!";
    }

    if (!values.mobileno) {
      errors.mobileno = "Mobile number is Required!";
    }
    if (!values.message) {
      errors.message = "Message is Required !";
    }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    const hasErrors = Object.keys(errors).length > 0;

    if (hasErrors) {
      setFormValidation(errors);
      return;
    }
    console.log("Errors", errors);
    console.log("form has Errors", hasErrors);
    console.log(formValues);
  };
  return (
    <div id="letsConnect" className="container">
      <div className="flex flex-wrap align-center">
        <div className=" text-black gap-3 md:w-1/3 mx-[auto]  md:my-[auto] md:rounded md:px-[30px] w-[80%] py-[80px] my-[auto]">
          I'm enthusiastic about Front End Development and Creating User
          Interfaces/ Client-side using Modern Libraries & Frameworks. On the
          way to Become Pro.. If any suggestions, please let me know, It will be
          a great help. 😄
          <div className="flex-col pt-2">
            <h3 className="font-[700] text-[18px]"> Contact On :</h3>
            <div>
              <a
                href="mailto:abhisheksingj123@gmail.com"
                className="text-primaryColor text-[16px] font-[600]"
              >
                Email : abhisheksingj123@gmail.com
              </a>
            </div>

            <div>
              <a
                href="tel:+918521268654"
                className="text-primaryColor text-[16px] font-[600]"
              >
                Mobile No : 8521268654
              </a>
            </div>
          </div>
        </div>

        {/* forms */}
        <div>
          <form className="md:my-[30px] md:rounded md:bg-gray-100 md:px-[30px] w-[80%] pt-[80px] pb-[40px] mx-[auto] md:w-5/3">
            <div className="flex flex-wrap -mx-3 mb-6 ">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name{" "}
                  <sup className="text-red-500 font-[800] text-[15px]">*</sup>
                </label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  className={`appearance-none  ${
                    formValidation?.firstName
                      ? "border-red-500"
                      : "border-gray-200"
                  } block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  {formValidation?.firstName}
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email{" "}
                  <sup className="text-red-500 font-[800] text-[15px]">*</sup>
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  className={`appearance-none ${
                    formValidation?.email ? "border-red-500" : "border-gray-200"
                  } block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-email"
                  type="email"
                />
                <p className="text-red-500 text-xs italic">
                  {formValidation?.email}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-mobile"
                >
                  Mobile No
                  <sup className="text-red-500 font-[800] text-[15px]">*</sup>
                </label>
                <input
                  name="mobileno"
                  onChange={handleChange}
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                    formValidation?.mobileno
                      ? "border-red-500"
                      : "border-gray-200"
                  }  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-mobile"
                  type="tel"
                />
                <p className="text-red-500 text-xs italic">
                  {formValidation?.mobileno}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-message"
                >
                  Message
                  <sup className="text-red-500 font-[800] text-[15px]">*</sup>
                </label>

                <textarea
                  id="grid-message"
                  name="message"
                  onChange={handleChange}
                  class={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                    formValidation?.message
                      ? "border-red-500"
                      : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize `}
                ></textarea>
                <p className="text-red-500 text-xs italic">
                  {formValidation?.message}
                </p>
              </div>
            </div>

            <div className=" mt-5">
              <button
                onClick={handleSubmit}
                className="bg-turquoise text-[18px] py-[10px] w-[100%] md:w-[auto] md:text-[22px] text-white font-[500] flex items-center justify-center gap-2 hover:bg-yellow-300 ease-in duration-300 md:py-1 px-6 rounded-[8px] "
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForms;
