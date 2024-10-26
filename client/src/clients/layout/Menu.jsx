import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSuitcase, FaTimes } from "react-icons/fa";
import { MdDesignServices, MdReviews, MdContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const FloatingMenu = ({isVisible, setIsVisible}) => {
  const [isOpen, setIsOpen] = useState(false);
  


  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsVisible(true); // Ensure it's visible when toggled
  };

  useEffect(() => {
    if(!isVisible){
      setIsOpen(false)
    }
  }, [isVisible])
  


  return (
    <div
      className={`fixed bottom-10 left-1/2  transition-all duration-600 ease-in-out transform -translate-x-1/2 z-50 duration-700 ${
        isVisible ? "translate-y-0" : "translate-y-[150px]"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Central Button */}
        <button
          className={`bg-blue-600 text-white p-6 rounded-full shadow-xl focus:outline-none transform transition-transform duration-400 ease-in-out ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
          style={{ zIndex: 10 }}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>

        {/* Menu Options */}
        <ul
          className={`absolute overflow-hidden w-80 h-80 transition-all duration-600 ease-in-out ${
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } flex justify-center items-center`}
        >
          {/* Portfolio */}
          <li
            onClick={toggleMenu}
            className={`absolute transform transition-all duration-600 ease-in-out ${
              isOpen
                ? "translate-x-0 translate-y-[-100px] opacity-100"
                : "translate-x-0 translate-y-0 opacity-0"
            }`}
          >
            <Link
              to="/"
              className="bg-blue-500 text-white p-6 w-16 h-16 flex items-center justify-center rounded-full hover:bg-blue-700 transition transform hover:scale-110 duration-200 ease-in-out shadow-2xl"
            >
              <FaSuitcase size={28} />
            </Link>
          </li>

          {/* Services */}
          <li
            onClick={toggleMenu}
            className={`absolute transform transition-all duration-600 ease-in-out ${
              isOpen
                ? "translate-x-[-70px] translate-y-[-70px] opacity-100"
                : "translate-x-0 translate-y-0 opacity-0"
            }`}
          >
            <Link
              to="/services"
              className="bg-green-500 text-white p-6 w-16 h-16 flex items-center justify-center rounded-full hover:bg-green-700 transition transform hover:scale-110 duration-200 ease-in-out shadow-2xl"
            >
              <MdDesignServices size={28} />
            </Link>
          </li>

          {/* Reviews */}
          <li
            onClick={toggleMenu}
            className={`absolute transform transition-all duration-600 ease-in-out ${
              isOpen
                ? "translate-x-[-100px] translate-y-[-0px] opacity-100"
                : "translate-x-0 translate-y-0 opacity-0"
            }`}
          >
            <Link
              to={'/reviews'}
              className="bg-yellow-500 text-white p-6 w-16 h-16 flex items-center justify-center rounded-full hover:bg-yellow-700 transition transform hover:scale-110 duration-200 ease-in-out shadow-2xl"
            >
              <MdReviews size={28} />
            </Link>
          </li>

          {/* Projects */}
          <li
            onClick={toggleMenu}
            className={`absolute transform transition-all duration-600 ease-in-out ${
              isOpen
                ? "translate-x-[70px] translate-y-[-70px] opacity-100"
                : "translate-x-0 translate-y-0 opacity-0"
            }`}
          >
            <Link
              to="/projects"
              className="bg-red-500 text-white p-6 w-16 h-16 flex items-center justify-center rounded-full hover:bg-red-700 transition transform hover:scale-110 duration-200 ease-in-out shadow-2xl"
            >
              <GrProjects size={28} />
            </Link>
          </li>

          {/* Contact */}
          <li
            onClick={toggleMenu}
            className={`absolute transform transition-all duration-600 ease-in-out ${
              isOpen
                ? "translate-y-[-0px] translate-x-[100px] opacity-100"
                : "translate-y-0 opacity-0"
            }`}
          >
            <Link
              to="/contact"
              className="bg-purple-500 text-white p-6 w-16 h-16 flex items-center justify-center rounded-full hover:bg-purple-700 transition transform hover:scale-110 duration-200 ease-in-out shadow-2xl"
            >
              <MdContactMail size={28} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
