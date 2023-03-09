import React from "react";
import {
  UzbProkuratura,
  YulHarakati,
  IIV,
  ITPark,
  BankOfAmerica,
  TATU,
} from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand">
    <div data-aos="zoom-in-up" data-aos-delay="0">
      <img
        src={UzbProkuratura}
        className="frontLogo"
        alt="Prokuratura logo"
        width="100%"
        height="auto"
      />
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="50">
      <img
        src={YulHarakati}
        className="frontLogo"
        alt="YulHarakati logo"
        width="100%"
        height="auto"
      />
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="100">
      <img
        src={IIV}
        className="frontLogo"
        alt="IIV logo"
        width="100%"
        height="auto"
      />
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="150">
      <img
        src={ITPark}
        className="frontLogo"
        alt="ITPark logo"
        width="100%"
        height="auto"
      />
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="200">
      <img
        src={BankOfAmerica}
        className="frontLogo"
        alt="BankOfAmerica logo"
        width="100%"
        height="auto"
      />
    </div>
    <div data-aos="zoom-in-up" data-aos-delay="250">
      <img
        src={TATU}
        className="frontLogo"
        alt="TATU logo"
        width="100%"
        height="auto"
      />
    </div>
  </div>
);

export default Brand;
