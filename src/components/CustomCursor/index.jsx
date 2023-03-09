import React, { useEffect, useRef } from "react";
import "./style.css";

export default function CustomCursor() {
  console.log(
    "%cWebsite has been made by Musobek Madrimov!",
    "color: crimson; font-family:monospace; font-size: 30px"
  );
  console.log(
    "%cOfficial website of the creator: https://musobekmadrimov.netlify.app",
    "color: crimson; font-family:monospace; font-size: 15px"
  );

  document.addEventListener("mousemove", function (e) {
    let cursor = document.querySelector(".cursor");
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener("mousemove", function (e) {
    let cursorinner = document.querySelector(".cursor2");
    let x = e.clientX;
    let y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
  });

  document.addEventListener("mousedown", function () {
    let cursorinner = document.querySelector(".cursor2");
    let cursor = document.querySelector(".cursor");
    cursor.classList.add("click");
    cursorinner.classList.add("cursorinnerhover");
  });

  document.addEventListener("mouseup", function () {
    let cursorinner = document.querySelector(".cursor2");
    let cursor = document.querySelector(".cursor");
    cursor.classList.remove("click");
    cursorinner.classList.remove("cursorinnerhover");
  });

  useEffect(() => {
    let a = document.querySelectorAll("a");
    a.forEach((item) => {
      let cursor = document.querySelector(".cursor");
      item.addEventListener("mouseover", () => {
        cursor.classList.add("hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
  }, []);

  return (
    <div>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </div>
  );
}
