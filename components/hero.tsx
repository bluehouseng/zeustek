"use client"

import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";

// import Modal from "../utils/Modal";
import network from "../images/network.jpg";
// import herovid from "../images/herovid.mp4";




 


function Explainer() {
  const [videoModalOpen, setVideoModalOpen] = useState(true);

  return (
    <section id="section4">
      <div className="w-full bg-black sm:px-4">
        <div className=" md:py-20 h-screen  relative">
          <div className="absolute w-full h-full top-0 left-0 z-20 bg-black opacity-20" />

          <video
            id="explainer-video"
            className="w-full h-full absolute top-0 left-0 herobackground object-cover "
            autoPlay={true}
            loop
            muted
            // controls
          >
            <source src="https://res.cloudinary.com/dlf3o8cx3/video/upload/v1700003046/videos/techfestvideo-bad2796a_il63ul.mp4" />
          </video>
          <div className="relative w-full h-full ">
            <div className="flex items-end justify-center h-full">
              
                <h2 className="text-4xl text-center text-white font-extrabold">
                  THEME: empowering market women |<br />
                  
                    <p className="text-2xl">
                      Navigating the Digital Frontier of Economic Transformation
                    </p>
                  
                </h2>
              

           
            </div>
          </div>

    
        </div>
      </div>
    </section>
  );
}

export default Explainer;
