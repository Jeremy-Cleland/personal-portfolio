import React, { useState, useEffect } from "react";

/**
 * TypewriterText - A component to animate text like a typewriter
 *
 * Props:
 * text {string} - The text to display and animate
 * tag {string} - The HTML tag to use for the text (default: 'p')
 * speed {number} - The speed of the typing animation in milliseconds (default: 40)
 * delay {number} - The delay before the typing animation starts in milliseconds (default: 0)
 */
const TypewriterText = ({ text, tag = "p", speed = 40, delay = 0 }) => {
  const [displayText, setDisplayText] = useState(""); // The text that is currently displayed
  const [index, setIndex] = useState(0); // The current index in the text string
  const [startTyping, setStartTyping] = useState(false); // Whether to start typing

  // Handle delay
  useEffect(() => {
    // After the delay time, set startTyping to true to start the animation
    const timeout = setTimeout(() => {
      setStartTyping(true);
    }, delay);
    // Clean up the timeout when the component unmounts or the delay changes
    return () => clearTimeout(timeout);
  }, [delay]);

  // Handle animation of text
  useEffect(() => {
    // Only start typing if startTyping is true
    if (startTyping && index < text.length) {
      // After each 'speed' time period, add the next character to the displayText
      setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, speed);
    }
  }, [startTyping, index, displayText, text, speed]);

  return React.createElement(
    tag,
    {
      className: "inline-block",
      style: startTyping ? undefined : { color: "transparent" },
    },
    startTyping ? displayText : text
  );
};

export default TypewriterText;
