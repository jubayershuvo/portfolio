import React from "react";
import TypingText from "../components/TypingText";
import { FaDownload } from "react-icons/fa";
import "../../App.css";
import Carousel from "../components/Carousel";
import Footer from "../layout/Footer";

function Home({ handleScroll }) {
  const texts = [
    "Welcome to my React portfolio!",
    "I am a JavaScript developer.",
    "Let's build something amazing together.",
  ];

  const experience = Math.ceil(new Date().getFullYear() - 2022);
  const age = Math.ceil(new Date().getFullYear() - 2004);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div
          onScroll={handleScroll}
          className="h-screen custom-scrollbar overflow-y-scroll snap-y snap-mandatory space-y-4 scroll-smooth"
        >
          {/* Page 1 */}
          <section className="h-screen snap-start flex items-center justify-center">
            <div className="h-screen w-full bg-cover bg-right mx-auto">
              <div className="text-center text-white h-full flex flex-col items-center justify-center">
                <div className="my-5">
                  <h1 className="text-2xl font-bold text-purple-400">
                    <span className="text-4xl font-sans font-bold text-orange-500">
                      JS
                    </span>
                    &lt;coder/&gt;
                  </h1>
                </div>
                <div className="w-full">
                  <TypingText texts={texts} speed={100} pause={2000} />
                </div>

                <div className="mt-6">
                  <a
                    href="/resume.pdf" // Path to your resume file in the public folder
                    download="Md_Jubayer_Resume" // Optional: sets the downloaded file's name
                    className="bg-red-700 text-white px-6 text-xs md:text-sm py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center justify-center"
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Page 2 */}
          <section className="h-screen snap-start flex items-center justify-center">
            <div className="h-full mx-auto w-[95%] md:w-full mt-24">
              <img
                className="object-cover object-center w-60 h-60 rounded-full mx-auto shadow-lg shadow-pink-700"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JxMk2So1ctmhLnZD0s09i_Lc0mHjNhPNfw&s"
                alt=""
              />
              <div className="text-center text-white justify-center space-y-4 mt-5">
                <p className="text-2xl border-b-2 inline-block font-extrabold font-sans opacity-90">
                  Md Jubayer
                </p>
                <p className="text-xl md:text-2xl font-bold font-sans opacity-90 text-purple-200">
                  I have {experience} years experience.
                </p>
                <p className="text-base md:text-lg font-bold font-sans opacity-90 text-purple-200">
                  As a professional{" "}
                  <span className="font-extrabold text-lg md:text-xl text-orange-500">
                    JavaScript
                  </span>{" "}
                  developer.
                </p>
                <p className="text-lg md:text-xl font-sans opacity-90 text-green-300">
                  I am a passionate{" "}
                  <span className="font-bold text-orange-500">JavaScript</span>{" "}
                  developer with a focus on building{" "}
                  <span className="font-extrabold underline">dynamic</span> and{" "}
                  <span className="font-extrabold underline">responsive</span>{" "}
                  web applications. I enjoy working with modern frameworks and
                  tools to create seamless user experiences. I’m always eager to
                  solve problems and improve my skills to bring innovative ideas
                  to life.
                </p>
                <div className="flex space-x-2 justify-between w-[90%] md:w-[50%] mx-auto pt-20 md:pt-44">
                  <button className="bg-orange-500 h-12 w-44 rounded-lg shadow-md shadow-red-500 text-base md:text-xl font-extrabold hover:scale-110">
                    Hire me
                  </button>
                  <button className="h-12 w-44 bg-yellow-500 rounded-lg shadow-md shadow-orange-500 text-base md:text-xl font-extrabold hover:scale-110">
                    Give Review
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Page 3 */}
          <section className="h-screen snap-start flex items-center justify-center">
            <div className="h-full w-[90%] md:w-full bg-cover bg-right mx-auto">
              <h1 className="text-red-600 mt-10 text-4xl font-bold inline-block border-b-2 border-green-300">
                Skills
              </h1>
              <div className="mt-5 mx-auto">
                <Carousel />
              </div>
              <div className="text-white">
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-orange-600 ">
                    HTML
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    HTML (HyperText Markup Language) is the standard language
                    for creating web pages, using elements and tags to structure
                    content such as text, images, and links for display in web
                    browsers.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-blue-600 ">
                    CSS
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    CSS (Cascading Style Sheets) is a stylesheet language used
                    to describe the presentation of HTML documents, allowing
                    developers to control layout, colors, fonts, and overall
                    visual style across multiple pages consistently.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-yellow-200 ">
                    JS
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    JavaScript (JS) is a high-level, dynamic programming
                    language primarily used for enhancing interactivity and
                    functionality in web pages, enabling features such as
                    animations, form validation, and real-time updates, and is
                    essential for building modern web applications.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-blue-500 ">
                    TAILWIND
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    Tailwind CSS is a utility-first CSS framework that provides
                    a collection of pre-defined classes to design custom user
                    interfaces quickly, promoting a modular approach to styling
                    by allowing developers to apply styles directly in HTML
                    markup without writing custom CSS.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-blue-600 ">
                    REACT
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    React is a JavaScript library for building user interfaces,
                    developed by Facebook, that allows developers to create
                    reusable UI components, manage state efficiently, and build
                    complex web applications using a component-based
                    architecture and a virtual DOM for optimal performance.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-green-900 ">
                    NODE
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    Node.js is a JavaScript runtime built on Chrome's V8 engine
                    that enables developers to execute JavaScript on the server
                    side, allowing for the creation of scalable network
                    applications and APIs, and it utilizes an event-driven,
                    non-blocking I/O model for efficient handling of concurrent
                    requests.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-yellow-200 ">
                    EXPRESS
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    Express.js is a minimal and flexible web application
                    framework for Node.js that provides a robust set of features
                    for building web and mobile applications, enabling
                    developers to create APIs quickly and efficiently by
                    simplifying the routing, middleware integration, and server
                    setup process.
                  </p>
                </div>
                <div className="mt-3">
                  <h1 className="text-base font-bold border-b-2 inline-block border-orange-700 ">
                    GIT-GITHUB
                  </h1>
                  <p className="text-[8px] md:text-xs">
                    Git is a distributed version control system that allows
                    developers to track changes in their code, collaborate with
                    others, and manage code revisions efficiently. GitHub is a
                    web-based platform that hosts Git repositories, providing
                    features like version control, issue tracking, and
                    collaborative tools to enhance software development and
                    facilitate team collaboration.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Page 3 */}
          <section className="h-screen snap-start flex items-center justify-center">
            <div className="h-screen relative w-full md:w-full bg-cover bg-right mx-auto">
              <div className="text-white text-center mt-5 md:mt-10">
                <h1 className="text-4xl font-bold border-b-2 inline-block border-green-400 text-red-300">
                  About
                </h1>
                <div className="text-start">
                  <div className="mb-5">
                    <h1 className="text-xl font-bold underline">Md Jubayer</h1>
                    <li className="mt-2">
                      <span className="font-bold">Age: </span>
                      {age} years
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Experience: </span>
                      {experience} years
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Specialization: </span>MERN
                      Stack Development (MongoDB, Express.js, React, Node.js)
                    </li>
                  </div>
                  <div className="mb-5">
                    <h1 className="text-xl font-bold underline">
                      Core Skills:
                    </h1>
                    <li className="mt-2">
                      <span className="font-bold">Frontend: </span>
                      HTML, CSS, JavaScript, React
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Backend: </span>
                      Node.js, Express.js
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Database: </span>MERN MongoDB
                    </li>
                    <li className="mt-2">
                      <span className="font-bold">Additional Tools: </span>MERN
                      Proficient in using react-icons for skill iconography
                    </li>
                  </div>
                  <div className="mb-5">
                    <h1 className="text-xl font-bold underline">
                      Development Approach:
                    </h1>
                    <li className="mt-2">
                      I focus on writing clean, efficient code and developing
                      scalable applications.
                    </li>
                    <li className="mt-2">
                      Dedicated to creating seamless, user-friendly experiences.
                    </li>
                    <li className="mt-2">
                      Always updated with the latest in tech, continuously
                      honing my skills to deliver high-quality work.
                    </li>
                  </div>
                </div>
                <h1 className="text-xl font-bold pt-5 underline">Summary</h1>
                <p className="p-4">
                  Md Jubayer here! I’m a 19-year-old MERN stack developer with a
                  strong 3 years of hands-on experience in building dynamic web
                  applications. I’m skilled in MongoDB, Express.js, React, and
                  Node.js, with a solid foundation in frontend development using
                  HTML, CSS, and JavaScript. My approach to development
                  emphasizes clean, efficient code and seamless user
                  experiences. I thrive on solving complex problems, staying
                  updated with the latest tech trends, and constantly enhancing
                  my skills to deliver high-quality, scalable solutions. Ready
                  to take on exciting projects and make an impact!
                </p>
              </div>
              <div className=" absolute bottom-0 w-full">
                <div className="mx-auto">
                  <Footer />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
