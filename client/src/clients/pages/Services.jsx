import React from "react";
import {
  FaLaptopCode,
  FaPalette,
  FaServer,
  FaUpload,
  FaShoppingCart,
  FaUsers,
  FaFileAlt,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaHeartbeat,
  FaPlaneDeparture,
  FaPlayCircle,
  FaAddressBook,
} from "react-icons/fa";
import Footer from "../layout/Footer";

function Services({ handleScroll }) {
  return (
    <div
      onScroll={handleScroll}
      className="h-screen w-screen overflow-hidden overflow-y-auto custom-scrollbar text-white bg-transparent"
    >
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <h1 className="text-4xl font-bold text-orange-400 inline-block border-b-2 border-red-500">
          Services
        </h1>
        <div className="text-start mt-10">
          <div className="mx-4 mb-10">
            <h1 className="text-xl md:text-2xl">
              <FaLaptopCode className="inline-block mr-2 text-orange-300" />
              <span className="border-b-2 border-orange-300">
                Build full web Applications:
              </span>
            </h1>
            <div className="w-full text-start ml-5">
              <img
                src={"./images/web-application.jpg"}
                alt="Web Application"
                className="mt-3 w-1/2 rounded-lg shadow-lg"
              />
            </div>
            <p className="ml-5 text-sm md:text-lg mt-2">
              Looking to create a complete, responsive website that stands out?
              I’m here to help! As a web developer with expertise in HTML, CSS,
              JavaScript, and React, I specialize in building full, dynamic web
              solutions tailored to meet your unique needs. From intuitive
              front-end designs to robust back-end functionality, I ensure that
              every website I build is optimized for performance, security, and
              user experience. With attention to detail and a commitment to
              quality, I can help you bring your vision to life online. So,
              let's get started—choose to build your full web solution with me
              and watch your ideas take shape!
            </p>
          </div>

          <div className="mx-4 mb-10">
            <h1 className="text-xl md:text-2xl">
              <FaPalette className="inline-block mr-2 text-orange-300" />
              <span className="border-b-2 border-orange-300">
                Build web UI:
              </span>
            </h1>
            <div className="w-full text-start ml-5">
              <img
                src={"./images/web-ui.jpg"}
                alt="Web Application"
                className="mt-3 w-1/2 rounded-lg shadow-lg"
              />
            </div>
            <p className="ml-5 text-sm md:text-lg mt-2">
              Are you looking for a sleek, responsive, and user-friendly web
              interface that truly reflects your brand? I specialize in building
              engaging web UIs that prioritize both design and functionality.
              With my skills in HTML, CSS, JavaScript, and React, I can create a
              seamless experience that’s visually appealing and easy to
              navigate. Let's work together to bring your ideas to life with a
              custom-built web UI that makes a lasting impression!
            </p>
          </div>

          <div className="mx-4 mb-10">
            <h1 className="text-xl md:text-2xl">
              <FaServer className="inline-block mr-2 text-orange-300" />
              <span className="border-b-2 border-orange-300">
                Build web API server:
              </span>
            </h1>
            <div className="w-full text-start ml-5">
              <img
                src={"./images/api-server.jpg"}
                alt="Web Application"
                className="mt-3 w-1/2 rounded-lg shadow-lg"
              />
            </div>
            <p className="ml-5 text-sm md:text-lg mt-2">
              Are you looking to establish a reliable and efficient web server
              that meets your specific needs? I specialize in building custom
              web servers that are robust, scalable, and tailored to your unique
              requirements. Let’s collaborate to turn your ideas into reality
              and build a web server that empowers your projects.
            </p>
          </div>

          <div className="mx-4 mb-10">
            <h1 className="text-xl md:text-2xl">
              <FaUpload className="inline-block mr-2 text-orange-300" />
              <span className="border-b-2 border-orange-300">
                Update your web application:
              </span>
            </h1>
            <div className="w-full text-start ml-5">
              <img
                src={"./images/update-web.jpg"}
                alt="Web Application"
                className="mt-3 w-1/2 rounded-lg shadow-lg"
              />
            </div>
            <p className="ml-5 text-sm md:text-lg mt-2">
              Is your website feeling outdated or not performing as well as it
              should? I’m here to help you breathe new life into your old web
              presence! Let’s work together to refresh your old web and ensure
              it meets today’s standards and expectations.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold text-orange-400 inline-block border-b-2 border-red-500">
            Popular Services
          </h1>
          <div className="mx-4 mt-5 text-start">
            {/* Add Popular Services with icons */}
            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaShoppingCart className="inline-block mr-2 text-orange-300" />
                <span className="border-b-2 border-orange-300">
                  E-Commerce Applications:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/ecommerce.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Shopify,
                  WooCommerce, Amazon
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Platforms for
                  buying and selling products online.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaUsers className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Social Networking Applications:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/social-networking.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Facebook,
                  Twitter, LinkedIn
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Platforms that
                  allow users to connect and share content.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaFileAlt className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Content Management Systems (CMS):
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/cms.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>WordPress,
                  Joomla, Drupal
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Tools for
                  managing digital content.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaProjectDiagram className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Project Management Tools:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/project-management.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Trello, Asana,
                  Slack
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Applications
                  for task management and collaboration.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaChalkboardTeacher className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Online Learning Platforms:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/online-learning.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Coursera, Udemy,
                  Khan Academy
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Educational
                  platforms providing courses.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaMoneyBillWave className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Finance Tools:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/finance-tools.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Mint, QuickBooks,
                  PayPal
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Applications
                  for managing finances and transactions.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaHeartbeat className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Health and Fitness Apps:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/health-fitness.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>MyFitnessPal,
                  Fitbit, Strava
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Applications
                  for tracking health and fitness.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaPlaneDeparture className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Travel Planning Apps:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/travel-planning.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Expedia,
                  TripAdvisor, Kayak
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Tools for
                  planning trips and travel itineraries.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaPlayCircle className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Entertainment Platforms:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/entertainment.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Netflix, Spotify,
                  Hulu
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Applications
                  for streaming media.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-xl md:text-2xl">
                <FaAddressBook className="inline-block mr-2 text-orange-300" />

                <span className="border-b-2 border-orange-300">
                  Address Book Apps:
                </span>
              </h1>
              <div className="w-full text-start ml-5">
                <img
                  src={"./images/address-book.jpg"}
                  alt="Web Application"
                  className="mt-3 w-1/2 rounded-lg shadow-lg"
                />
              </div>
              <div className="ml-5 mt-2">
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Examples: </span>Google Contacts,
                  Contacts+{" "}
                </li>
                <li className="text-sm md:text-lg">
                  <span className="font-bold">Description: </span>Tools for
                  managing contacts and personal information.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;
