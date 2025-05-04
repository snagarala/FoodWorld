import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Catering() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    streetAddress: false,
    city: false,
    region: false,
    postalCode: false,
  });

  const [errorShown, setErrorShown] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return (
          value.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        );
      case "phone":
        return /^\d{10}$/.test(value.replace(/\D/g, ""));
      case "postalCode":
        return /^\d{5}(-\d{4})?$/.test(value);
      default:
        return value.trim().length > 0;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {    //Only proceeds if the current field already has an error.
      setErrors((prev) => ({
        ...prev,
        [name]: !validateField(name, value),
      }));
    }
  };

  //Fields are validated on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: !validateField(name, value),
    }));
  };

  //Email must be entered before phone number logic
  const handlePhoneFocus = () => {
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: true }));
      if (!errorShown) {
        setErrorShown(true);
        toast.error("Please fill out email field", {
          position: "top-center",
          autoClose: 6000,
          style: {
            position: "absolute",
            top: "320px",
            right: "20px",
            margin: "4px 0",
            width: "350px",
          },
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {}; //validate each field
    Object.keys(formData).forEach((key) => {
      newErrors[key] = !validateField(key, formData[key]);
    });

    setErrors(newErrors); //update errors
     
    //if any errors,show toast
    if (Object.values(newErrors).some((error) => error)) {
      toast.error("Please fill out all required fields correctly", {
        position: "top-center",
        autoClose: 6000,
      });
      return;
    }

    // Continue with form submission
    toast.success("Form submitted successfully!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="w-[100%]">
      <ToastContainer />
      <Navbar />
      <div className="w-[95%] mx-auto mt-[40px]">
        <h1 className="text-green-900 font-bold font-['Fraunces'] text-center text-[90px]">
          Now Providing <br /> Catering Services
        </h1>
        <div className="bg-[#F3F6F4] p-4 rounded-3xl">
          <h2 className="text-green-900 font-thin text-[38px] mt-4 text-center italic font-sans">
            Please submit the form below,and we will get back to you <br />{" "}
            right away.
          </h2>
          <div>
            <form
              onSubmit={handleSubmit}
              className="form grid grid-cols-2 gap-6 w-[650px] mt-9 ml-[40px] "
            >
              <div>
                <label className="text-green-900 font-normal p-2 mb-2">
                  First name
                </label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`rounded-lg bg-[#E1E7E3] mt-2 p-4 mr-5 w-full 
                  hover:border hover:border-green-900 outline-none
                  ${errors.firstName ? "border border-red-500" : ""}`}
                />
              </div>

              <div className="">
                <label className="text-green-900 font-normal p-2">
                  Last name
                </label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`rounded-lg bg-[#E1E7E3] p-4 mt-2 w-full 
                  hover:border hover:border-green-900 outline-none
                  ${errors.lastName ? "border border-red-500" : ""}`}
                />
                <br />
              </div>
              <div className="col-span-2">
                <label className="text-green-900 font-normal p-2">
                  Best Email*
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`rounded-lg bg-[#E1E7E3] p-4 w-full hover:border
                     hover:border-green-900 outline-none
                      ${errors.email ? "border border-red-500" : ""}`}
                />
                <br />
              </div>

              <div className="col-span-2">
                <label className="text-green-900 font-normal p-2">
                  Best Phone
                </label>
                <br />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handlePhoneFocus}
                  className={`rounded-lg bg-[#E1E7E3] p-4 w-full hover:border
                  hover:border-green-900 outline-none
                  ${errors.phone ? "border border-red-500" : ""}`}
                />
                <br />
              </div>

              <div className="col-span-2">
                <label className="text-green-900 font-normal p-2">
                  Street Address for Event
                </label>
                <br />
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Street Address"
                  className={`rounded-lg bg-[#E1E7E3] p-4
                  hover:border hover:border-green-900 outline-none w-full
                  ${errors.streetAddress ? "border border-red-500" : ""}`}
                />
                <br />
              </div>

              <div className="col-span-2">
                <label className="text-green-900 font-normal p-2">
                  Street Address Line 2
                </label>
                <br />
                <input
                  type="text"
                  name="streetAddress2"
                  value={formData.streetAddress2}
                  onChange={handleChange}
                  placeholder="Street Address Line 2"
                  className="rounded-lg bg-[#E1E7E3] 
                  hover:border hover:border-green-900 outline-none p-4 w-full"
                />
                <br />
              </div>

              <div>
                <label className="text-green-900 font-normal p-2">City</label>
                <br />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="City"
                  className={`rounded-lg bg-[#E1E7E3] p-4 
                  hover:border hover:border-green-900 outline-none w-full
                  ${errors.city ? "border border-red-500" : ""}`}
                />
                <br />
              </div>

              <div>
                <label className="text-green-900 font-normal p-2">
                  Region / State / Province
                </label>
                <br />
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Region/State/Province"
                  className={`rounded-lg bg-[#E1E7E3]
                  hover:border hover:border-green-900 outline-none p-4 w-full
                  ${errors.region ? "border border-red-500" : ""}`}
                />
                <br />
              </div>

              <div className="col-span-2">
                <label className="text-green-900 font-normal p-2">
                  Postal / Zip code
                </label>
                <br />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Postal / Zip code"
                  className={`rounded-lg bg-[#E1E7E3] p-4 w-full
                  hover:border hover:border-green-900 outline-none
                  ${errors.postalCode ? "border border-red-500" : ""}`}
                />
                <br />
              </div>

              <div className="col-span-2">
                <label className="text-green-900 font-normal p-2">
                  Please describe the event, number of people, any special
                  requests
                </label>
                <br />
                <textarea
                  type="text"
                  rows="5"
                  className="rounded-lg bg-[#E1E7E3] 
                 p-4 w-full hover:border hover:border-green-900 outline-none"
                />
                <br />
              </div>

              <button
                className="bg-green-700 opacity-75 hover:bg-green-900 mb-[50px]
                rounded w-full text-center text-white p-2 ml-[150px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="flex mt-[250px] justify-end pr-[40px] mb-[180px]">
          <FaSquareInstagram size={60} className="text-pink-800 ml-[80px] cursor-pointer" />
          <FaFacebook size={60} className="text-[#3D5999] ml-[20px] cursor-pointer" />
        </div>
        <div className="mb-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}
