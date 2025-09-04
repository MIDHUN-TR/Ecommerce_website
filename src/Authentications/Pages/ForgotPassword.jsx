import React from 'react'

function ForgotPassword() {
    return (
        <>
            <div class="min-h-screen bg-[#0B0F2B] p-4 text-white flex justify-center items-center w-full ">
                <div className="w-full  md:w-[75%] min-h-[500px] border-[3px]  md:flex md:flex-row  ">
                    <div className="md:flex-1 relative">
                        <div className="pt-[3%] ps-[3%]">
                            <h4>Forgot Your Password?</h4>
                            <p className='text-justify text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente similique</p>
                        </div>
                        <div className=" ps-[1.5%] pr-[5.5%]  flex flex-col justify-center items-center pt-[7%] ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-[75%] px-4  pr-10 py-2 rounded-lg bg-[#374151] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
                            />
                        </div>

                    </div>
                    <div className="md:flex-1 hidden md:block">
                        h
                    </div>



                </div>
            </div>
        </>
    )
}

export default ForgotPassword
