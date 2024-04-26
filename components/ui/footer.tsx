import ema from './ema.png'
import Link from 'next/link'
import Image from 'next/image'
import What from "@/public/images/what.jpg";

export default function Footer() {
  return (
    <footer className='bg-white'>
      
          {/* Bottom area */}
          <div className="text-left md:flex md:items-left md:justify-between mb-8 md:mb-6">
      
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

{/* Blocks */}
<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

  {/* 1st block */}
  <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
    <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
      <div className="mb-4 sm:mb-0">
        <div className="mb-4">
          {/* <Logo/> */}
        </div>
      
      </div>
      {/* logo*/}
      <div className="mb-8 sm:mb-0">
      <div className="mb-8 sm:mb-0">
      <div className="mb-8 sm:mb-0">
      <div className="rounded-2xl flex items-center justify-center group">
              <Image
                className="w-10 h-13"
                src={What}
                alt="whater"
              />
            </div>
      <a className="inline-flex group" href="/" aria-label="Cruip"></a>
    </div>
 
</div>

</div>

    </div>
  </div>

  {/* 2nd block */}
  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
    <h6 className="text-sm text-black-50 font-medium mb-2">Products</h6>
    <ul className="text-sm space-y-2">
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Features</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Integrations</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Pricing & Plans</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Changelog</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Our method</a>
      </li>
    </ul>
  </div>

  {/* 3rd block */}
  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
    <h6 className="text-sm text-black-50 font-medium mb-2">Company</h6>
    <ul className="text-sm space-y-2">
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">About us</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Diversity & Inclusion</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Blog</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Careers</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Financial statements</a>
      </li>
    </ul>
  </div>

  {/* 4th block */}
  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
    <h6 className="text-sm text-black-50 font-medium mb-2">Resources</h6>
    <ul className="text-sm space-y-2">
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Community</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Terms of service</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Report a vulnerability</a>
      </li>
    </ul>
  </div>

  {/* 5th block */}
  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
    <h6 className="text-sm text-black-50 font-medium mb-2">Legals</h6>
    <ul className="text-sm space-y-2">
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Refund policy</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Terms & Conditions</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Privacy policy</a>
      </li>
      <li>
        <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Brand Kit</a>
      </li>
    </ul>
  </div>

</div>

</div>
        </div> 
    </footer>
  )
}
