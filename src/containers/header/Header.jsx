import React from "react";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content" data-aos="fade-right">
        <h1 className="gradient__text">
          Automate your business processes using our IT services.
        </h1>
        <p>
          We provide a full range of IT services that help you to improve system
          reliability, minimize downtime, and ensure maximum security. This
          helps you to grow your business and keep customers happy.
        </p>
      </div>

      <div className="gpt3__header-image" data-aos="fade-left">
        <img src={ai} alt="AI" width="100%" />
      </div>
    </div>
  );
};

export default Header;
