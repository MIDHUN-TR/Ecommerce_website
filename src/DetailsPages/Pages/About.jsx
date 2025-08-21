import React from "react";
import AuthNavbar from "../../Authentications/Components/AuthNavbar";

function About() {
const sections = [
  {
    title: "Our Mission",
    description: "We aim to deliver value through innovation, customer focus, and sustainable growth.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Life at Company",
    description: "Our culture is built on teamwork, curiosity, and the drive to make a difference every day.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Core Values",
    description: "We believe in integrity, ownership, and pushing boundaries to create meaningful impact.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Impact Reports",
    description: "Explore how we support employees, communities, and the environment through our initiatives.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Leadership Team",
    description: "Meet the people who guide our vision and ensure we stay true to our mission.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Company Stance",
    description: "We share our perspectives on important issues that affect our customers, partners, and industry.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Policy Engagement",
    description: "We work with policymakers to advocate for progress in areas that matter to society.",
    image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Recognition",
    description: "We are proud to be acknowledged for our contributions and achievements worldwide.",
    image: "https://images.unsplash.com/photo-1559027615-ce3a0372710b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Letters to Stakeholders",
    description: "Read messages from our leadership team about company performance and future direction.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
  }
];



  return (
    <>
      <div className="w-full min-h-[100vh]">
        <AuthNavbar />
        {/* main image section */}
        <section className="w-full min-h-[600px] bg-[url('/images/About1.png')] bg-center bg-no-repeat bg-cover">
          <div className="w-[50%] min-h-[600px] flex flex-col  items-center justify-center">
            <h1 className="text-4xl font-bold text-left">Your One-Stop</h1>
            <h1 className="text-4xl font-bold text-left">Online Shopping </h1>
            <h1 className="text-4xl font-bold text-left">Destination </h1>
            <p className="text-justify"></p>
          </div>
        </section>
        {/* happy customer section */}
        <section className="">
          <img
            src={"/images/About1.png"}
            alt=""
            className=" w-[100%] px-11 sm:min-h-[150px] my-9 md:h-[450px]  "
          />
        </section>
        {/* text section  */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="md:w-[50%] sm:w-full">
            <h4 className="text-justify font-mono font-semibold text-xl p-3 m-7 ">
              “Day 1” mentality is about approaching every challenge with the
              energy, curiosity, and boldness of a team that’s just getting
              started.
            </h4>
            <p className="text-justify font-semibold text-xl p-1 m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              deserunt modi aut magnam voluptatum temporibus voluptatem iure rem
              expedita fugit commodi quasi eveniet quam cupiditate tempore
              officiis perferendis porro et?
            </p>
          </div>
        </div>
        {/* card section */}
        <h2 className="text-xl font-semibold md:ms-[10%] sm:ms-4 m-5">Learn more...</h2>
        <div className="flex gap-4 flex-wrap px-2 justify-center">


          <div class="max-w-sm sm:flex  md:grid bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg sm:" src="https://picsum.photos/seed/mission/400/250" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            </div>
          </div>
          

        </div>
      </div>
    </>
  );
}

export default About;
