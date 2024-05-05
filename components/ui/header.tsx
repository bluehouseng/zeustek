import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Author01 from "@/public/images/logo (2).png";

export default function Header() {
  return (
    <header className="absolute w-full z-30 bg-white">
      <div className="px-4 sm:px-6 flex justify-center items-center h-16 md:h-20">
        {/* Site branding */}
        <div className="mr-auto m-3 mt-5">
          <Image src={Author01} alt="Your Image" width={70} height={70} />
        </div>
        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          {/* Desktop menu links */}
          <ul className="flex justify-center items-center">
            <li>
              <Link className="text-black mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/">
                <button className="px-3 py-1 rounded-lg">Home</button>
              </Link>
            </li>
            <li>
              <Link className="text-black mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/gallery">
                <button className="px-3 py-1 rounded-lg">Gallery</button>
              </Link>
            </li>
            <li>
              <Link className="text-black mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/about">
                <button className="px-3 py-1 rounded-lg">About</button>
              </Link>
            </li>
            <li>
              <Link className="text-black mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/contact">
                <button className="px-3 py-1 rounded-lg">Contact us</button>
              </Link>
            </li>
            <li>
              <Link className="text-black mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/testimonial">
                <button className="px-3 py-1 rounded-lg">Testimonials</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <MobileMenu />
    </header>
  );
}  