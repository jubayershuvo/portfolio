import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebookMessenger,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import Footer from "../layout/Footer";

function Contact({handleScroll}) {
  const age = Math.ceil(new Date().getFullYear() - 2004);
;

  const iconStyle = {
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div onScroll={handleScroll} className="w-screen h-screen overflow-hidden overflow-y-auto custom-scrollbar">
      <div className="text-gray-300 max-w-4xl mx-auto mt-10">
        <div className="mx-4">
        <div className="mx-auto">
          <h1 className="text-2xl font-sans font-bold text-indigo-400 border-b-2 inline-block border-orange-400">
            Details
          </h1>
          <div className="flex mt-5">
            <img className="h-28" src="./logo512.png" alt="profile" />
            <div className="p-1">
              <p className="text-lg font-bold underline">Md Jubayer</p>
              <p>
                <span className="font-semibold">Age: </span>
                {age} years
              </p>
              <p>
                <span className="font-semibold">Profession: </span>Professional
                JavaScript web developer.
              </p>
              <p>
                <span className="font-semibold">Address: </span>7052 Daulatpur
                Kushtia Dhaka BD.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-xl font-bold border-b-2 inline-block border-orange-400 text-blue-500">
            Social Media Links
          </h1>
          <div className="flex space-x-2 mt-2">
            <a
              href="https://facebook.com/jubayershuvo.FB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ ...iconStyle, color: "#1877f2" }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} style={{ ...iconStyle, color: "#1DA1F2" }} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                style={{ ...iconStyle, color: "#E4405F" }}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ ...iconStyle, color: "#0077B5" }}
              />
            </a>
            <a
              href="https://github.com/jubayershuvo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} style={{ ...iconStyle, color: "#fff" }} />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-xl font-bold border-b-2 inline-block border-orange-400 text-blue-500">
            Contact Links
          </h1>
          <div className="flex space-x-2 mt-2 ">
            <a
              href="https://m.me/jubayershuvo.FB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookMessenger
                size={30}
                style={{ ...iconStyle, color: "#00B2FF" }}
              />
            </a>
            <a
              href="https://t.me/jubayer_shuvo_js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram
                size={30}
                style={{ ...iconStyle, color: "#0088cc" }}
              />
            </a>
            <a
              href="https://wa.me/+8801964753086"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={30}
                style={{ ...iconStyle, color: "#25D366" }}
              />
            </a>
            <a
              href="tel:+8801964753086"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone size={30} style={{ ...iconStyle, color: "#4CAF50" }} />
            </a>
          </div>
        </div>
        <hr className="mt-2 opacity-30" />
        </div>

        <div className="w-full my-10 p-4 bg-transparent rounded-lg shadow-sm">
          <h1 className="text-2xl border-b-2 shadow-sm font-semibold text-white mb-6 inline-block mx-auto text-center justify-center">
            Contact Form
          </h1>
          <div className="space-y-4">
            <div className="block">
              <label
                htmlFor="name"
                className="block text-white font-medium mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 shadow-sm border-t-0 border-white shadow-white py-2 text-gray-800 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="block">
              <label
                htmlFor="email"
                className="block text-white font-medium mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 shadow-sm border-t-0 border-white shadow-white py-2 text-gray-800 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="block">
              <label
                htmlFor="phone"
                className="block text-white font-medium mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 shadow-sm border-t-0 border-white shadow-white py-2 text-gray-800 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="block">
              <label
                htmlFor="message"
                className="block text-white font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 shadow-sm border-t-0 border-white shadow-white py-2 text-gray-800 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button className="mt-4 w-full shadow-sm shadow-slate-400 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
