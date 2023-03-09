import React, { useEffect, useState } from "react";
import "./upButton.css";

export default function UpButton() {
  const [upButtonIsVisible, setupButtonIsVisible] = useState(false);

  function toggleVisibility() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setupButtonIsVisible(true);
    } else {
      setupButtonIsVisible(false);
    }
  }

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  });

  return (
    <button
      className={upButtonIsVisible ? "show" : ""}
      id="upButton"
      onClick={scrollToTop}
    >
      <div className="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <div className="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <svg
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  );
}
