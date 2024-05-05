"use client";

import { useEffect } from "react";

import Image from "next/image";


// Import Swiper
import Swiper, { Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
Swiper.use([Pagination]);

export default function Testimonials() {
  useEffect(() => {
    const testimonial = new Swiper(".testimonial-carousel", {
      slidesPerView: 1,
      watchSlidesProgress: true,
      pagination: {
        el: ".testimonial-carousel-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pb-8">
          <div className="relative">
            {/* Gray box */}
            <div
              className="absolute inset-0 bg-gray-100 rotate-2 -z-10"
              aria-hidden="true"
            />
            {/* Content */}
            <div className="relative px-6 pb-8 md:px-12 lg:pb-0">
              
              <div className="testimonial-carousel swiper-container">
                <div className="swiper-wrapper">
                  {/* Testimonial */}
                  <div className="swiper-slide space-y-8 lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left">
                    <div className="shrink-0 relative inline-flex">
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dnrsomsds/image/upload/v1714922628/kifh7ldpui9lnldatzhk.jpg"
                        width={260}
                        height={250}
                        alt="Testimonial 01"
                      />
                      <div className="absolute right-0 bottom-0 mr-4 mb-6">
                        
                      </div>
                    </div>
                    <div className="relative">
                      <svg
                        className="absolute left-0 top-0 -mt-16"
                        width="24"
                        height="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-blue-300"
                          d="M9.736 2.485c-.458-.226-.257-.84.318-1.7.185-.273.932-.82 1.107-.783.348.065.692.136.979.256.18.067 1.969 1.987 2.587 2.648.615.624 1.083 1.347 1.53 2.09L17.6 7.26c.445.756.883 1.516 1.3 2.287.142.256.257.527.347.812l.081.29c.282 1.15.768 2.18 1.292 3.19l.386.742a.66.66 0 0 0 .286.294c.394.193 1.857 3.493 1.922 3.978.221 1.181.258 2.447.447 3.634l.046.2c.023.099.034.203-.028.331-.237.5-.06.81.025 1.16.125.486.232.98.29 1.495.03.257-.059.56-.103.847-.044.263-.507.352-.586.304-.222-.138-.354.122-.522.225l-.128.072a.317.317 0 0 1-.058.022c-.073.008-1.941-1.856-2.315-2.283l-.051-.063c-.019-.026-.604-.888-1.23-1.81-.688-.87-1.177-1.889-1.326-2.07-.14-.202-.146-.47-.186-.718-.014-.127-1.707-2.888-1.761-3-.241-.629-.68-1.149-.602-1.95.015-.155-.062-.268-.125-.385-.541-1.007-.898-2.118-1.32-3.194-.213-.55-.53-1.04-.789-1.563-.047-.094-.043-.218-.07-.327l-.064-.27a.681.681 0 0 0-.05-.124c-.68-1.196-1.16-2.527-1.992-3.62-.18-.26-.585-1.813-.829-2.088-.127-.157.036-1.103-.15-1.192ZM.246 30.253c-.444-.162-.255-.76.311-1.603.181-.27.91-.842 1.081-.836.333.018.657.04.927.104.162.05 1.832 1.473 2.456 1.898.588.425 1.074.94 1.534 1.478.947 1.084 1.946 2.123 2.938 3.169.221.234.402.5.557.8.45.912 1.096 1.635 1.784 2.31l.458.443a.49.49 0 0 0 .32.14c.382.023 2.439 2.21 2.624 2.586.48.9.833 1.948 1.316 2.865.062.136.192.213.158.44-.077.523.162.705.334.963.242.356.472.726.67 1.13.097.2.102.5.141.762.033.237-.356.518-.438.512-.236-.018-.283.261-.406.424a.968.968 0 0 1-.138.16c-.06.042-2.243-.708-2.71-.915l-.07-.034-1.605-1.025c-.859-.466-1.577-1.147-1.759-1.25-.179-.114-.254-.348-.357-.548l-2.36-1.975c-.375-.463-.9-.783-1.001-1.523-.022-.145-.117-.222-.199-.304-.72-.73-1.276-1.62-1.865-2.476-.3-.435-.672-.81-1.003-1.217-.06-.073-.077-.185-.119-.277l-.098-.233a.458.458 0 0 0-.067-.102c-.813-.94-1.43-2.061-2.312-2.943-.207-.201-.686-1.6-.927-1.826-.137-.127.002-1.032-.176-1.097Z"
                        />
                      </svg>
                      <div>
                        <h4 className="h3 font-cabinet-grotesk mb-4 ">
                          I have been able to upfront my social media pressence and also generate leads to boost my Business. 
                          Indeed Social Media makes things easier especially the Business aspect.
                        </h4>
                        <h6 className="italic">Mrs Awazi A. </h6>
                      </div>
                      <div>
                       
                      </div>
                    </div>
                  </div>
                  {/* Testimonial */}
                  <div className="swiper-slide space-y-8 lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left">
                    <div className="shrink-0 relative inline-flex">
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dnrsomsds/image/upload/v1714922632/vcy1wmi640mczmo5urlt.jpg"
                        width={260}
                        height={250}
                        alt="Testimonial 02"
                      />
                      <div className="absolute right-0 bottom-0 mr-4 mb-6">
                       
                      </div>
                    </div>
                    <div className="relative">
                      

                      <div>
                        <h4 className="h3 font-cabinet-grotesk mb-4">
                          I have been a novice to the online space and as a result of this training, 
                          I gained exposure and I am able to transact my business globally
                        </h4>
                        <h6 className="italic">
                        
                          Eunice Nanko Nimyel
                        </h6>
                      </div>

                      <div>
                        
                      </div>
                    </div>
                  </div>
                  {/* Testimonial */}
                  <div className="swiper-slide space-y-8 lg:flex items-center lg:space-y-0 lg:space-x-8 text-center lg:text-left">
                    <div className="shrink-0 relative inline-flex">
                      <Image
                        className="rounded-full"
                        src="https://res.cloudinary.com/dnrsomsds/image/upload/v1714922630/mwfjnllscap6yg7cheok.jpg"
                        width={260}
                        height={250}
                        alt="Testimonial 03"
                      />
                      <div className="absolute right-0 bottom-0 mr-4 mb-6">
                       
                      </div>
                    </div>
                    <div className="relative">
                      <svg
                        className="absolute left-0 top-0 -mt-16"
                        width="24"
                        height="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-blue-300"
                          d="M9.736 2.485c-.458-.226-.257-.84.318-1.7.185-.273.932-.82 1.107-.783.348.065.692.136.979.256.18.067 1.969 1.987 2.587 2.648.615.624 1.083 1.347 1.53 2.09L17.6 7.26c.445.756.883 1.516 1.3 2.287.142.256.257.527.347.812l.081.29c.282 1.15.768 2.18 1.292 3.19l.386.742a.66.66 0 0 0 .286.294c.394.193 1.857 3.493 1.922 3.978.221 1.181.258 2.447.447 3.634l.046.2c.023.099.034.203-.028.331-.237.5-.06.81.025 1.16.125.486.232.98.29 1.495.03.257-.059.56-.103.847-.044.263-.507.352-.586.304-.222-.138-.354.122-.522.225l-.128.072a.317.317 0 0 1-.058.022c-.073.008-1.941-1.856-2.315-2.283l-.051-.063c-.019-.026-.604-.888-1.23-1.81-.688-.87-1.177-1.889-1.326-2.07-.14-.202-.146-.47-.186-.718-.014-.127-1.707-2.888-1.761-3-.241-.629-.68-1.149-.602-1.95.015-.155-.062-.268-.125-.385-.541-1.007-.898-2.118-1.32-3.194-.213-.55-.53-1.04-.789-1.563-.047-.094-.043-.218-.07-.327l-.064-.27a.681.681 0 0 0-.05-.124c-.68-1.196-1.16-2.527-1.992-3.62-.18-.26-.585-1.813-.829-2.088-.127-.157.036-1.103-.15-1.192ZM.246 30.253c-.444-.162-.255-.76.311-1.603.181-.27.91-.842 1.081-.836.333.018.657.04.927.104.162.05 1.832 1.473 2.456 1.898.588.425 1.074.94 1.534 1.478.947 1.084 1.946 2.123 2.938 3.169.221.234.402.5.557.8.45.912 1.096 1.635 1.784 2.31l.458.443a.49.49 0 0 0 .32.14c.382.023 2.439 2.21 2.624 2.586.48.9.833 1.948 1.316 2.865.062.136.192.213.158.44-.077.523.162.705.334.963.242.356.472.726.67 1.13.097.2.102.5.141.762.033.237-.356.518-.438.512-.236-.018-.283.261-.406.424a.968.968 0 0 1-.138.16c-.06.042-2.243-.708-2.71-.915l-.07-.034-1.605-1.025c-.859-.466-1.577-1.147-1.759-1.25-.179-.114-.254-.348-.357-.548l-2.36-1.975c-.375-.463-.9-.783-1.001-1.523-.022-.145-.117-.222-.199-.304-.72-.73-1.276-1.62-1.865-2.476-.3-.435-.672-.81-1.003-1.217-.06-.073-.077-.185-.119-.277l-.098-.233a.458.458 0 0 0-.067-.102c-.813-.94-1.43-2.061-2.312-2.943-.207-.201-.686-1.6-.927-1.826-.137-.127.002-1.032-.176-1.097Z"
                        />
                      </svg>
                      <div>
                        <h4 className="h3 font-cabinet-grotesk mb-4">
                          Firstly, I was able to connect with like minds.
                          I learnt how to multitask effectively with digital tools without having one to suffer.
                        </h4>
                        <h6 className="italic">Lilybeth Tamnar </h6>
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bullets */}
              <div className="mt-4 lg:absolute bottom-0 right-0 lg:mt-0 lg:mr-12 lg:mb-16 z-10">
                <div className="testimonial-carousel-pagination text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
