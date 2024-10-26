import React, { useState, useEffect } from "react";

const TypingText = ({ texts, typingSpeed = 100, erasingSpeed = 50, pauseBetween = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0); // Track the current text in the array
  const [charIndex, setCharIndex] = useState(0); // Track the current character of the current text
  const [isErasing, setIsErasing] = useState(false); // Whether we're currently erasing or typing

  useEffect(() => {
    let timeout;

    if (!isErasing) {
      // Typing the text
      if (charIndex < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Once the text is fully written, pause before erasing
        timeout = setTimeout(() => {
          setIsErasing(true);
        }, pauseBetween);
      }
    } else {
      // Erasing the text
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1)); // Remove last character
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
      } else {
        // Once the text is fully erased, move to the next text and start typing again
        setIsErasing(false);
        setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the first text after the last one
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, texts, textIndex, typingSpeed, erasingSpeed, pauseBetween]);

  return (
    <div className="text-sm md:text-lg font-mono">
      {displayedText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </div>
  );
};

export default TypingText;
