"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import Loader from "./../../components/Loader/Loader";

const ContactPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceId = "service_ykjlokn";
    const templateId = "template_mlzetrg";
    const publicKey = "RdiwV32iaxKKxW4Hr";

    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      user_mobile: formData.phone,
      to_name: "Trade Logic",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });

        const timer = setTimeout(() => {
          setSubmitSuccess(false);
          router.push("/");
        }, 3000);

        return () => clearTimeout(timer);
      })
      .catch((error) => {
        console.error("Error sending email", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen py-16  bg-black flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm lg:max-w-xl">
            <img
              src="/contacttrade.png"
              alt="Contact Illustration"
              className="w- h-auto object-fit "
            />
            <div className="absolute  rounded-xl blur-lg -z-10"></div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=" md:p-8  backdrop-blur-sm"
        >
          <motion.h2
            variants={itemVariants}
            className="text-white text-3xl sm:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text "
          >
            Contact Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-center mb-8"
          >
            Have questions? We'd love to hear from you.
          </motion.p>

          {submitSuccess && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300 text-center"
            >
              Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {["name", "email", "phone"].map((field) => (
              <motion.div
                key={field}
                variants={itemVariants}
                className="relative group"
              >
                <div className="relative z-0">
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    {...(field === "phone" && {
                      maxLength: 10,
                      pattern: "[0-9]*",
                      inputMode: "numeric",
                    })}
                    className={`peer w-full pt-6 pb-2 px-4 bg-gray-900/50 text-white rounded-lg border ${
                      errors[field]
                        ? "border-yellow-500"
                        : "border-gray-700 group-hover:border-gray-600"
                    } focus:border-yellow-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all duration-300`}
                    placeholder=" "
                  />
                  <label className="absolute left-4 top-2 text-xs text-gray-400 transition-all duration-300 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    {field === "phone" ? " Number" : ""}
                  </label>
                </div>
                {errors[field] && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 flex items-center"
                  >
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors[field]}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="relative group">
              <div className="relative z-0">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`peer w-full pt-6 pb-2 px-4 bg-gray-900/50 text-white rounded-lg border ${
                    errors.message
                      ? "border-yellow-500"
                      : "border-gray-700 group-hover:border-gray-600"
                  } focus:border-yellow-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition-all duration-300`}
                  placeholder=" "
                ></textarea>
                <label className="absolute left-4 top-2 text-xs text-gray-400 transition-all duration-300 peer-focus:text-xs peer-focus:text-yellow-400 peer-focus:top-2 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                  Your Message
                </label>
              </div>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-1 flex items-center"
                >
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? "bg-gray-700"
                    : "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-lg hover:shadow-orange-500/30"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
