import Head from "next/head";
import Image from "next/image";
import zeustek from "@/public/images/14.jpg";
import zeustek1 from "@/public/images/4.jpg";
import zeustek3 from "@/public/images/17.jpg";
import zeustek4 from "@/public/images/10.jpg";
import zeustek5 from "@/public/images/20.jpg";
import zeustek6 from "@/public/images/11.jpg";
import zeustek7 from "@/public/images/15.jpg";
import zeustek8 from "@/public/images/19.jpg";
import zeustek9 from "@/public/images/14.jpg";
import zeustek10 from "@/public/images/1.jpg";
import zeustek11 from "@/public/images/5.jpg";
import zeustek12 from "@/public/images/9.jpg";

export default function Gallery() {
  return (
    <div className=" lg:mt-[10%] mt-24 italic ">
      <div className="max-w-7xl mx-auto text-center pb-12 md:pb-16">
        <div className="mb-80">
          <h2 className="text-2xl md:text-3xl font-bold "> Gallery.</h2>
          <p className="text-xl text-gray-600 mb-[100%] lg:mb-0">
            Building dreams upon a bedrock of compassion and empowerment.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto lg:mt-0 mb-[20%] -mt-[52%]">
        <div className="pb-12 md:pb-20">
          <div className="relative w-full h-0 pb-3/4">
            <figure
              className="absolute m-14 -bottom-1 left-[12.2%] w-[41.7%] max-w-[320]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Image
                className="shadow-2xl rounded-md"
                src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714859193/aaea1rml3b1tzdjxqg0v.jpg`}
                width={320}
                height={240}
                alt="Team mosaic 02"
              />
            </figure>

            <figure
              className="absolute left-[20%] top-[11.8%] w-[70.3%] max-w-[540]"
              data-aos="fade-down"
              data-aos-delay={150}
            >
              <Image
                className="shadow-2xl rounded-md"
                src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714859193/aaea1rml3b1tzdjxqg0v.jpg`}
                width={540}
                height={360}
                alt="Team mosaic 01"
              />
            </figure>
            <figure
              className="absolute -bottom-1 right-[6.2%] w-[41.7%] max-w-[320]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Image
                className="shadow-2xl rounded-md"
                src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714858606/q3v4px2h2urjqkjt1qwv.jpg`}
                width={320}
                height={240}
                alt="Team mosaic 02"
              />
            </figure>

            <figure
              className="  absolute -top-[15vh] left-[3.2%] w-[41.7%] max-w-[320]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Image
                className="shadow-2xl rounded-md"
                src={`https://res.cloudinary.com/dqkwvguyg/image/upload/v1714859292/zgpb3apgyucazxcdkskw.jpg`}
                width={320}
                height={240}
                alt="Team mosaic 02"
              />
            </figure>
          </div>
        </div>
      </div>
      <section className="">
        <div className=" max-w-6xl mx-auto flex flex-wrap justify-center items-center ">
          <div className="w-full">
            {/* <h1 className="text-3xl  text-[#737373] text-center mb-4">
          Our Products
        </h1> */}
            <p className="text-lg text-center mt-[30%]  lg:mt-16 lg:m-1font-bold">
              Empowerment
            </p>
            <p className="text-base text-[#737373] text-center lg:mb-8  ">
              Collaboration amplifies potential, turning individual sparks into
              a blazing trail of collective brilliance.
            </p>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image
                className="w-full rounded-md"
                src={zeustek11}
                alt="Image"
              />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">Empowering</div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image className="w-full rounded-md" src={zeustek9} alt="Image" />
              <div className="px-6 py-4">
                <div className=" rounded-md text-xl mb-2 text-center">
                  Traniees
                </div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image className="w-full rounded-md" src={zeustek1} alt="Image" />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">Training</div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image className="w-full rounded-md" src={zeustek5} alt="Image" />
              <div className="px-6 py-4">
                <div className=" rounded-md text-xl mb-2 text-center">
                  Tech women
                </div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image className="w-full rounded-md" src={zeustek6} alt="Image" />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">Tare Foundation</div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image className="w-full rounded-md" src={zeustek7} alt="Image" />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">
                  Exposure to tech
                </div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image className="w-full rounded-md" src={zeustek8} alt="Image" />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">Strengthen</div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">N1,000.00</div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image className="w-full rounded-md" src={zeustek9} alt="Image" />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">Inspire</div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">N1,000.00</div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image
                className="w-full rounded-md"
                src={zeustek10}
                alt="Image"
              />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">Enhance</div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="  justify-center  ">
              <Image
                className="w-full rounded-md"
                src={zeustek11}
                alt="Image"
              />
              <div className="px-6 py-4">
                <div className=" text-xl mb-2 text-center">Strengthen</div>
                {/* <div className="text-[#737373] text-base text-center">
              English Department
            </div>
            <div className="text-[#BDBDBD] text-base text-center">
              N1,000.00
            </div> */}
              </div>
            </div>
          </div>
          {/* <div className="w-full text-center mt-16">
        <button className=" text-[#2174EA]  py-2 px-12 rounded border-2">
          See More
        </button>
      </div> */}
        </div>
      </section>
    </div>
  );
}
