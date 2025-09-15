import React, { useState } from 'react'

function ForgotPassword() {
    const [showotpBox, setotpBox] = useState(true)
    // const boxCoun =Array(6)

    const [boxCount, setBoxCount] = useState(Array(6).fill(""))
    return (
        <>
            <div class="min-h-screen bg-[#0B0F2B] p-4 text-white flex justify-center items-center w-full ">
                <div className="w-full  md:w-[75%] min-h-[500px] border-[3px]  md:flex md:flex-row  ">
                    <div className="md:flex-1 relative">
                        <div className="pt-[3%] ps-[3%]">
                            <h1 className='text-center text-lg'>Forgot Your Password?</h1>
                        </div>
                        <div className=" ps-[1.5%] pr-[5.5%] relative flex flex-col justify-center items-center pt-[7%] ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                class="w-[75%] px-4  pr-10 py-2 rounded-lg bg-[#374151] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
                            />
                            <button type='button' className="rounded-lg w-[90px] mt-5 p-1.5 bg-gradient-to-tr from-[#106EE8] to-[#53EDD3]">Submit</button>
                            {
                                showotpBox ?
                                    <>
                                        <div className="flex gap-4 mt-6">
                                            {
                                                boxCount.map((item, index) => (
                                                    <input key={index + 1} type='text' value={item} maxLength={1} className="border-orange-400 bg-transparent border-[2px] mt-6 p-4 rounded-lg w-[64px]" />))

                                            }
                                        </div>

                                        <button type='button' className="rounded-lg w-[90px] mt-5 p-1.5 bg-gradient-to-tr from-[#106EE8] to-[#53EDD3]">Verify</button>


                                    </>
                                    :
                                    <div className='hidden'></div>
                            }


                        </div>

                    </div>
                    <div className="md:flex-1 hidden md:block">
                        <img src="https://thumbs.dreamstime.com/b/businessman-cartoon-forgot-something-question-mark-pop-up-form-his-mind-34062203.jpg" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ForgotPassword
