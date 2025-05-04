import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//681C03-input border
export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    firstName: false,
    lastName: false,
    birthday: false,
    phone: false,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return value.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return !value.trim().length || /^\d{10}$/.test(value.replace(/\D/g, ""));
      case "birthday":
        if (!value) return true; // Birthday is optional
        const date = new Date(value);
        const today = new Date();
        return date <= today;
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

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: !validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: !validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = !validateField(key, formData[key]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      toast.error("Please fill out required fields correctly", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    // Continue with form submission
    toast.success("Successfully joined mailing list!", {
      position: "top-center",
      autoClose: 3000,
    });

    // Reset form
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      birthday: "",
      phone: "",
    });
  };

  return (
    <div className="footer w-[100%] mx-auto bg-[#F6F6EE] p-[40px] mt-8">
      <ToastContainer />
      <h1 className="text-green-900 font-bold text-start text-[40px] font-['cormorant_garamond'] mb-2">
        Join Our
        <br /> Mailing List
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-start font-extralight text-[20px] mb-1 text-green-900">
          Email
          <span className="text-green-900">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          className={`p-4 focus:outline-none border-2 ${errors.email ? 'border-red-500' : 'border-[#681C03]'} mb-[40px] bg-[#F6F6EE] 
           font-extralight text-green-900`}
        />

        <label className="text-start font-extralight text-[20px] mb-1 text-green-900">
          First name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="First name"
          className={`p-4 focus:outline-none mb-[40px] border-b ${errors.firstName ? 'border-red-500' : 'border-gray-700'} hover:border-blue-800 
          hover:border-b-2 outline-none bg-[#F6F6EE] font-extralight text-green-900`}
        />

        <label className="text-start font-extralight text-[20px] mb-1 text-green-900">
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Last name"
          className={`p-4 focus:outline-none mb-[40px] bg-[#F6F6EE] border-b ${errors.lastName ? 'border-red-500' : 'border-gray-700'}
         hover:border-blue-800 hover:border-b-2 outline-none font-extralight text-green-900`}
        />

        <label className="text-start font-extralight text-[20px] mb-1 text-green-900">
          Birthday
        </label>
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Birthday"
          className={`p-4 focus:outline-none mb-[40px] bg-[#F6F6EE] border-b ${errors.birthday ? 'border-red-500' : 'border-gray-700'} 
        hover:border-blue-800 hover:border-b-2 outline-none font-extralight text-green-900`}
        />

        <label className="text-start font-extralight text-[20px] mb-1 text-green-900">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Phone"
          className={`p-4 focus:outline-none mb-[40px] bg-[#F6F6EE] border-b ${errors.phone ? 'border-red-500' : 'border-gray-700'} 
        hover:border-blue-800 hover:border-b-2 outline-none font-extralight text-green-900`}
        />

        <button
          type="submit"
          className="bg-green-900 text-white py-3 text-[20px] border-2 border-transparent
          rounded cursor-pointer w-[150px] hover:bg-white hover:border-blue-600
          hover:text-blue-600 transition-all duration-300"
        >
          Join
        </button>
      </form>
    </div>
  );
}
