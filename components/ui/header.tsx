import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
// import Author01 from "@/public/images/logo1.png";

export default function Header() {
  return (
    <header className="absolute w-full z-30 flex bg-black italic ">
      <div className="  px-4 sm:px-6 items-center justify-center">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="d-flex justify-content-end justify-content-sm-start">
            <div className=" md:mr-1  lg:mr-72 mr-64 mt-1 ">
              {/* <Image src={} alt="Your Image" width={50} height={50} /> */}
            </div>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center italic">
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="/"
                >
                  <button className="px-3 py-1 rounded-lg italic ">Home</button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="/gallery"
                >
                  <button className="px-3 py-1 rounded-lg italic ">Gallery </button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="/about"
                >
                  <button className="px-3 py-1 rounded-lg  italic ">About</button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/contact"
                >
                  <button className="px-3 py-1 rounded-lg italic ">Contact us</button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="/testimonial"
                >
                  <button className="px-3 py-1 rounded-lg  italic">Testimonials </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
}
