import React from 'react'

function Contact() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#FAF7F2]">
        <div className="flex flex-row gap-4">
          <div className='text-gray-600 p-4 w-full '>
            <h2>Wants a help?Here we are to help  you </h2>
            <div className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ut corrupti quis non eligendi expedita fugiat quo doloribus.
              Laborum dolores consectetur, voluptatum unde delectus, ex repudiandae, magnam sint odit quae provident.
            </div>
          </div>
          <div className='p-4 flex flex-col justify-center items-center '>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
