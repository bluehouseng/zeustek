import React from "react";
import Image from "next/image";
import bluehouse from "@/public/images/bluehouse .jpg";
import zeustek from "@/public/images/zeustek1.jpg";

function Powered() {
  return (
    <div>
      <div className=" text-center justify-center flex m-7 -mb-1 ">
        <div className="">
          <Image
            className="m-2"
            src={zeustek}
            width={63}
            height={63}
            alt="Author 01"
          />
        </div>
        <div className="">
          <Image
            className="m-1"
            src={bluehouse}
            width={100}
            height={100}
            alt="Author 01"
          />
        </div>
      </div>
      <h2 className="text-[20px] font-cabinet-grotesk text-center lg:mt-3 mb-12">
        powered by:
      </h2>
    </div>
  );
}

export default Powered;
