import TeamMember from "@/public/images/11.jpg";
import Image from "next/image";
import images from "@/public/images/19.jpg";


  export default function About() {
    return (
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
          <div className="pt-12 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="text-4xl mb-4 lg:mt-0 mt-5">
              Empowering African Business Women 
              </h1>
              <p className="text-xl text-gray-600">
              We're spearheading the fusion of innovative technologies to uplift African women entrepreneurs. Our central goal is to democratize the utilization of cutting-edge digital solutions, empowering women in business across Africa, particularly those from underserved communities, to flourish in the digital landscape.
              </p>
            </div>
          </div>
        </div>
  
        {/* First Image */}
        <div className="flex justify-center rounded-md -mt-24 mb-6">
          <img
            src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714859193/aaea1rml3b1tzdjxqg0v.jpg`}
            alt="some image"
            width={500}
            height={600}
            className="justify-center"
          />
        </div>
  
        {/* Story */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl mb-3">Our story</h3>
              <p className="text-lg text-gray-600 mb-8">
              Hailing from the heart of innovation, our team is dedicated to breaking down barriers and building bridges to success for women in business.
              </p>
              <p className="text-lg text-gray-600 mb-8">
              We understand the unique challenges faced by Africa businesses women we are committed to providing solutions that are not only effective but also accessible.
              </p>
            </div>
  
            {/* Second Image and Text */}
            <div className="sm:flex items-center rounded-md ">
              <div className=""> 
              <img
                src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714858606/q3v4px2h2urjqkjt1qwv.jpg`}
                alt="some image"
                width={500}
                height={600}
                className="flex-shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0  "
              /></div>
              <div className="sm:ml-8 lg:ml-16">
                <h4 className="text-2xl mb-2">2024- 2025</h4>
                <p className="text-lg text-gray-600 mb-8">
                African women are reshaping the narrative and becoming catalysts for change in local business ecosystems.
                </p>
                <blockquote className="text-gray-600 ">
                “The positive feedback we receive consistently reaffirms the value it brings to our community, empowering African businesses in the tech sector.”
                </blockquote>
                <div className="text-sm font-medium text-gray-600 mt-2">
                  <cite className="text-gray-900 not-italic">
                    Zeustek
                  </cite>{" "}
                  ·{" "}
                  <a className="text-blue-600" href="#0">
                    Nigeria
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  