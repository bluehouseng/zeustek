import Link from 'next/link'
import MobileMenu from './mobile-menu'
export default function Header() {
  return (
    <header className="absolute w-full z-30 flex ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 items-center justify-center">
      <div className="flex items-center justify-between h-16 md:h-20">

        {/* Site branding */}
        <div className="flex-1 items-center">
          {/* You can add site branding here */}
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:grow">
          {/* Desktop menu links */}
          <ul className="flex grow justify-center flex-wrap items-center">
            <li>
              <Link className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out " href="#">
                <button className="px-3 py-1 rounded-lg  ">HOME</button>
              </Link>
            </li>
            <li>
              <Link className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out " href="#">
                <button className="px-3 py-1 rounded-lg  ">ABOUT US</button>
              </Link>
            </li>
            <li>
              <Link className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="#">
                <button className="px-3 py-1 rounded-lg  ">Contact US</button>
              </Link>
            </li>
            <li>
              <Link className="text-white mx-4 lg:mx-5 transition duration-150 ease-in-out " href="#">
                <button className="px-3 py-1 rounded-lg  ">TARE </button>
              </Link>
            </li>
          </ul>
        </nav>
      
        </div>
      </div>
      <MobileMenu />
    </header>
  )
}