import React from "react";
import "./footer.css";
import logo from "../../assets/A1Tech.png";
import { BsTelegram } from "react-icons/bs";

const Footer = () => (
  <div className="gpt3__footer section__padding" id="contacts">
    <div className="gpt3__footer-heading" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
      <h1 className="gradient__text">
        Do you want to automate your business processes before others ?
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <a
        href="https://t.me/MSanatbek"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Contact Us via Telegram <BsTelegram /></p>
      </a>
    </div>

    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="A1tech"
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=A1tech&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <br />
        <a href="https://www.embedgooglemap.net">google map code embed</a>
      </div>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" width="100%" />
        <p>
          Uzbekistan, Khorezm region
          <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="#home">
          <p>Home</p>
        </a>
        <a href="#aboutUs">
          <p>About us</p>
        </a>
        <a href="#projects">
          <p>Projects</p>
        </a>
        <a href="#contacts">
          <p>Contacts</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>108, Al-Khorezmiy str., Urgench, Khorezm, Uzbekistan</p>
        <a href="tel:+998622288080">
          <p>+998-62-228-80-80</p>
        </a>
        <a href="mailto:sanatbek@gmail.com">
          <p>sanatbek@gmail.com</p>
        </a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>2009-{new Date().getFullYear()} "MUSTAFO SOFTWARE" LLC. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
