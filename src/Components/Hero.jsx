"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16 py-10 bg-gray-100" id ='about-me'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-silver-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Khaoula",
                1000,
                "Developer",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            An ambitious and hardworking student with strong technical,
            logical and interpersonal skills. Eager to be challenged beyond
            the familiar in order to grow and expand on skillset and seeking
            to leverage his skills in a professional environment.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-200 text-black font-bold"
            >
              Hire Me
            </Link>
           {/* <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </Link>*/}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
            <Image
              src="/heroImage.png" 
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
