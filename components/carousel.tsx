'use client'
import React, { useEffect } from "react"; 

import govirtual from "@/public/images/govirtual.png";
import uj from "@/public/images/uj.jpg";
import ya from "@/public/images/ya.png";
import sterling from "@/public/images/sterling.png";
import tic from "@/public/images/tic.png";
import vesti from "@/public/images/vesti.jpg";
import gps from "@/public/images/gps.jpg";
import giz from "@/public/images/giz.jpg";
import jtg from "@/public/images/jtg.png";
import itf from "@/public/images/itf.jpg";
import gdg from "@/public/images/gdg.png";
import cp from "@/public/images/cp.png";
import pictda from "@/public/images/pictda.png";
import Client10 from "@/public/images/client-10.svg";

// Import Swiper
import Swiper, { Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";
Swiper.use([Autoplay]);

function Clients() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section className="bg-green-300 mt-0">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 font-cabinet-grotesk text-green-800">
            Our Sponsors/Partners:
          </h2>
        </div>

        
        <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-green-800 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-green-800">
          <div className="swiper-wrapper !ease-linear select-none">
           
            <div className="swiper-slide !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={uj}
                alt="Client 02"
              />
            </div>
           
            <div className="swiper-slide !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 !h-32 !w-32 rounded-2xl transform duration-500 ease-in-out"
                src={gps}
                alt="Client 07"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={giz}
                alt="Client 08"
              />
            </div>

            <div className="swiper-slide !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform rounded-2xl duration-500 ease-in-out"
                src={jtg}
                alt="Client 09"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={itf}
                alt="Client 10"
              />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={gdg}
                alt="Client 11"
              />
            </div>
           
            <div className="swiper-slide !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <Image
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={pictda}
                alt="Client 11"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
