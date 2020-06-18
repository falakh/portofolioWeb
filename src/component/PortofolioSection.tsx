import React, { useEffect } from "react";
import Portofolio from "./Portofolio";
import { portofolioList } from "../dataType/PortofolioLIst";
import Swiper from "swiper";
import "../asset/PortofolioSection.css"

export function PortofolioSection() {
  var listPortofolio = portofolioList.map((e) => (
    <div className="swiper-slide"> {Portofolio(e)} </div>
  ));

  useEffect(() => {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      initialSlide:1,
      setWrapperSize:true,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
  });

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary">Portfolio</h2>
        <hr className="star-dark mb-5"></hr>
        <div className="swiper-container">
          <div className="swiper-wrapper row justify-content-center">{listPortofolio}</div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

        {/* <div className="row justify-content-center"> 
        {listPortofolio}
         </div> */}
      </div>
    </section>
  );
}
