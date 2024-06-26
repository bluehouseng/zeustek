export const metadata = {
  title: 'Sign In - Creative',
  description: 'Page description',
}

import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        <h1 className="h2 font-cabinet-grotesk">Welcome back, Creative!</h1>
      </div>
      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input id="email" type="email" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input id="password" type="password" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-6">
            <Link
              className="font-medium text-sm sm:text-base text-blue-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
              href="/signup"
            >
              Join The Community
            </Link>
            <div className="ml-2">
              <button className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm">Sign In To Creative</button>
            </div>
          </div>
        </form>
        <div className="flex items-center my-6">
          <div className="border-t border-gray-200 grow mr-3" aria-hidden="true" />
          <div className="text-sm text-gray-500 italic">or</div>
          <div className="border-t border-gray-200 grow ml-3" aria-hidden="true" />
        </div>
        <form>
          <div className="flex flex-wrap">
            <div className="w-full">
              <button className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center">
                <svg className="fill-white opacity-80" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="m5.063 0 3.495 4.475L12.601 0h2.454L9.696 5.931 16 14h-4.938L7.197 9.107 2.771 14H.316L6.05 7.658 0 0h5.063Zm-.74 1.347H2.866l8.875 11.232h1.36L4.323 1.347Z" />
                </svg>
                <span className="flex-auto pl-16 pr-8 -ml-16">Join with Twitter</span>
              </button>
            </div>
          </div>
        </form>
      </div>    
    </>
  )
}
