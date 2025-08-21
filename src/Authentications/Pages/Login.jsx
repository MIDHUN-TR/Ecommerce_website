import React, { useState } from "react";
import AuthNavbar from "../Components/AuthNavbar";
function Login() {
  const [dark, setDark] = useState("");
  const [show, setShow] = useState(false);

  const showing = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="bg-[url('/images/login-background.png')] bg-center  bg-no-repeat min-w-full min-h-screen  ">
      <AuthNavbar/>
        <div className="min-w-full min-h-screen flex justify-center items-center">
          <div
            className={`${
              dark ? "bg-black" : ""
            }flex justify-center  p-8 rounded-xl w-full max-w-md shadow-lg flex-col col-span-1  h-fit`}
          >
            <form action="" className="">
              <h2
                class={`${
                  dark ? "text-white" : "text-black"
                } text-2xl font-bold mb-6`}
              >
                Welcome back
              </h2>
              <div className="w-full flex flex-col gap-3">
                <button
                  className={`w-full relative py-3  rounded-lg border ${
                    dark ? "text-white" : "text-dark"
                  } `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 533.5 544.3"
                    className="w-5 h-5 start-5 translate-y-1 translate-x-10 absolute "
                  >
                    <path
                      fill="#4285F4"
                      d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.4H272v95.4h146.9c-6.4 34.7-25.6 64.1-54.6 83.7l88.2 68.4c51.6-47.6 80.9-117.8 80.9-197.1z"
                    />
                    <path
                      fill="#34A853"
                      d="M272 544.3c73.7 0 135.5-24.4 180.6-66.2l-88.2-68.4c-24.5 16.4-55.7 26-92.4 26-71 0-131.1-47.9-152.6-112.3l-91.7 71c43.5 85.8 132.9 149.9 244.3 149.9z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M119.4 323.4c-10.1-30.1-10.1-62.5 0-92.6l-91.7-71C4.9 195.2 0 235.6 0 278.4s4.9 83.2 27.7 118.6l91.7-73.6z"
                    />
                    <path
                      fill="#EA4335"
                      d="M272 107.6c39.9 0 75.8 13.8 104 40.8l77.7-77.7C407.3 24.1 345.5 0 272 0 160.6 0 71.2 64.1 27.7 149.8l91.7 71C140.9 155.5 200.9 107.6 272 107.6z"
                    />
                  </svg>{" "}
                  Login in With Google
                </button>
                <button className=" relative w-full     text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-center py-3 dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30  mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    className="w-7 h-7 absolute translate-x-10 -translate-y-0 start-5 text-white"
                  >
                    <path d="M318.7 268.2c-.2-37.4 16.6-65.6 50.9-86.3-19.2-27.9-47.8-43.4-84.7-46.9-35.5-3.4-74 20.5-87.5 20.5-13.9 0-49.3-19.9-76.4-19.4-39.3.6-75.6 23-95.8 58.4-40.9 71.1-10.5 176.3 29.4 234.1 19.5 28.4 42.6 60.4 73 59.2 29.5-1.2 40.7-19 76.4-19 35.3 0 46 19 76.4 18.4 31.2-.5 51.1-28.4 70.3-56.9 12.2-17.8 17.2-26.9 27-47.3-71.2-27.1-67.9-107.3-67.9-114.8zM248.6 102.2c27.6-33.1 25.1-63.2 24.3-73.8-23.5 1.3-50.9 16.1-66.7 35.5-14.4 17.6-26.9 45.7-23.5 72.4 25.2 1.9 50.8-12.9 65.9-34.1z" />
                  </svg>
                  Log in With Apple
                </button>
              </div>
              <div className="mt-3 flex ">
                <div className="flex-col min-h-full flex items-center justify-center">
                  _____________________
                </div>
                <div className="flex-col"></div>
                <div className="flex-col"></div>
              </div>
              {/* <!-- Email Field --> */}
              <div class="relative mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="w-full px-4 pr-10 py-3 rounded-lg bg-[#374151] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
                />
                {/* <!-- Email Icon --> */}
                <svg
                  class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>

              {/* <!-- Password Field --> */}
              <div class="relative mb-6">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  class="w-full px-4 pr-10 py-3 rounded-lg bg-[#374151] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
                />
                {/* <!-- Eye Closed Icon --> */}
                {show ? (
                  <>
                    {/* <!-- Eye (show) - 24x24, stroke-based, scalable via font-size/color --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => showing()}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="false"
                      role="img"
                      class="w-5 h-5 absolute -translate-y-0 top-[12px] right-3 text-gray-400 cursor-pointer"
                    >
                      {/* <title>Show password</title> */}
                      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      onClick={() => showing()}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3l18 18M10.73 5.08a10.94 10.94 0 0 1 1.27-.08c6 0 10 7 10 7a20.94 20.94 0 0 1-2.06 2.88M15 15a3 3 0 1 1-4.24-4.24"
                      />
                    </svg>
                  </>
                )}
              </div>

              {/* <!-- Remember Me & Forgot Password --> */}
              <div class="flex items-center justify-between text-sm mb-6">
                <label class="flex items-center text-gray-300 space-x-2">
                  <input
                    type="checkbox"
                    class="form-checkbox text-blue-500 bg-[#1F2937]"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#" class="text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* <!-- Sign In Button --> */}
              <button class="w-full bg-[#2563EB] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200">
                Sign in to your account
              </button>

              {/* <!-- Sign up link --> */}
              <p class="mt-6 text-sm text-gray-400 text-center">
                Don’t have an account yet?{" "}
                <a href="#" class="text-blue-400 hover:underline">
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
