import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import logo from "@/public/logo.png";
import Contact from '../contact';

export default function Header() {
  return (
    <header className="absolute w-full z-30 flex ">
      <div className="  px-4 sm:px-6 items-center justify-center">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="d-flex justify-content-end justify-content-sm-start">
            <div className=" md:mr-1  lg:mr-72 mr-64 mt-1">
              <Image src={logo} alt="Your Image" width={50} height={50} />
            </div>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="#section4"
                >
                  <button className="px-3 py-1 rounded-lg  ">Home</button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="#section1"
                >
                  <button className="px-3 py-1 rounded-lg  ">Gallery </button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="#section2"
                >
                  <button className="px-3 py-1 rounded-lg  ">About</button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href='/Contact'
                >
                  <button className="px-3 py-1 rounded-lg  ">Contact us</button>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out "
                  href="#section1"
                >
                  <button className="px-3 py-1 rounded-lg  ">Tare </button>
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
