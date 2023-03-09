import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import { HiCheckCircle, HiLightBulb } from "react-icons/hi2";

import "./carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import projects from "./projects";

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div id="projects">
      <h1 className="projectsHeading gradient__text">Projects</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="projectContainer">
                <div className="leftSide" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                  <img
                    src={project.image}
                    alt={project.name + "Logo"}
                    className="projectLogo"
                    width="100%"
                  />
                </div>
                <div className="rightSide" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                  <div className="row">
                    <span className="heading gradient__text">Name:</span>
                    <span className="value">{project.name}</span>
                  </div>
                  <div className="row">
                    <span className="heading gradient__text">Type:</span>
                    <span className="value">{project.type}</span>
                  </div>
                  <div className="row">
                    <span className="heading gradient__text">Date:</span>
                    <span className="value">{project.date}</span>
                  </div>
                  <div className="row">
                    <span className="heading gradient__text">
                      Brief description:
                    </span>
                    <span className="value">{project.description}</span>
                  </div>
                  <div className="row">
                    {/* <a className="btn btn-success" href={project.interfaceLink}>
                      <HiComputerDesktop />
                      Interface
                    </a> */}
                    <a className="btn btn-danger" href={project.demoLink}>
                      <HiLightBulb />
                      Demo version
                    </a>
                    <a className="btn btn-success" href={project.orderLink}>
                      <HiCheckCircle />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
