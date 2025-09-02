import React from 'react'

function Contact() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#FAF7F2] flex flex-col justify-center items-center">
        <div className="md:flex sm:grid md:flex-row gap-4">
          {/* Column1 */}
          <div className='text-gray-600  w-full flex-1 gap-4 p-7'>
            <h2 className='my-4'>Wants a help?Here we are to help  you </h2>
            <div className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ut corrupti quis non eligendi expedita fugiat quo doloribus.
              Laborum dolores consectetur, voluptatum unde delectus, ex repudiandae, magnam sint odit quae provident.
            </div>
          </div>
          {/* Column 2 */}
          <div className='p-4 flex flex-col justify-center items-center flex-1'>
            <h1 className='text-3xl gap-4'>Contact Us</h1>
            <div className="max-w-sm space-y-3 w-full">

              {/* Username */}
              <div className="relative">
                <input type="text" className="peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2  border-b-gray-2 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter Name" />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <input type="email" className="peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter Email" />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16v16H4z"></path>
                    <polyline points="4,4 12,13 20,4"></polyline>
                  </svg>

                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <input type="text" className="peer py-2.5 sm:py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2  border-b-gray-2 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Enter Message" />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>

                </div>
              </div>

              {/* Contact Us Button */}
              <button type="button" className=" mt-7 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-[#100C08] text-white hover:bg-[#100C08] focus:outline-hidden focus:bg-[#100C08] disabled:opacity-50 disabled:pointer-events-none">
                Contact Us
              </button>
              <div className='my-9'>
                <h3 className='font-bold'>Contact</h3>
                <p>eCart@comapany.com</p>
              </div>

              <div className='my-9'>
                <h2 className='font-bold'>Based In</h2>
                <p className='flex flex-col '>
                  <span>Kerala</span>
                  <span>Palakkad</span>
                </p>
              </div>

              <div className='flex gap-4'>
                {/* Facebook */}
                <button>
                  <svg className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="#1877F2"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                {/* Instagram */}
                <button>
                  <svg className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                    <circle cx="12" cy="12" r="5"></circle>
                    <circle cx="17.5" cy="6.5" r="1.5"></circle>
                  </svg>

                </button>
                {/* Twitter or X */}
                <button type='button'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#1DA1F2" d="M23.643 4.937c-.835.37-1.732.62-2.675.732a4.697 4.697 0 0 0 2.057-2.592 9.284 9.284 0 0 1-2.957 1.13 4.656 4.656 0 0 0-7.936 4.245 13.188 13.188 0 0 1-9.57-4.85 4.656 4.656 0 0 0 1.442 6.21 4.615 4.615 0 0 1-2.11-.583v.058a4.656 4.656 0 0 0 3.733 4.563 4.694 4.694 0 0 1-2.104.08 4.657 4.657 0 0 0 4.345 3.22A9.325 9.325 0 0 1 0 19.54 13.142 13.142 0 0 0 7.13 21c8.552 0 13.223-7.085 13.223-13.223 0-.202-.004-.404-.013-.606a9.438 9.438 0 0 0 2.593-2.734z" />
                  </svg>

                </button>
              </div>


            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
