import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGit,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
// Note: Replace `FaExpress` and `FaTailwind` with generic icons like FaServer or similar

// Define the items you want to display in the carousel
const items = [
  <div className="item" key="1">
    <FaHtml5 size={60} color="#E34F26" /> {/* HTML5 Icon */}
  </div>,
  <div className="item" key="2">
    <FaCss3Alt size={60} color="#1572B6" /> {/* CSS3 Icon */}
  </div>,
  <div className="item" key="3">
    <SiTailwindcss size={60} color="#06b6d4" /> {/* Generic Tailwind Icon */}
  </div>,
  <div className="item" key="4">
    <FaJsSquare size={60} color="#F7DF1E" /> {/* JavaScript Icon */}
  </div>,
  <div className="item" key="5">
    <FaReact size={60} color="#61DAFB" /> {/* React Icon */}
  </div>,
  <div className="item" key="6">
    <FaNode size={60} color="#8CC84B" /> {/* Node.js Icon */}
  </div>,
  // Replace below with a suitable alternative for Express and Tailwind
  <div className="item" key="7">
    <SiExpress size={60} color="#f0db4f" /> {/* Generic Express Icon */}
  </div>,
  <div className="item" key="8">
    <FaGit size={60} color="#F05032" /> {/* Git Icon */}
  </div>,
];

const Carousel = () => {
  const responsive = {
    0: { items: 5 },
    768: { items: 9 },
    1024: { items: 9 },
  };

  return (
    <div className="carousel-container">
      <AliceCarousel
        infinite
        mouseTracking
        autoPlay
        autoPlayInterval={2000}
        disableDotsControls
        responsive={responsive}
        items={items}
      />
    </div>
  );
};

export default Carousel;
