"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="start" className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl md:text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </div>
            <TypeAnimation
              sequence={[
                "Mustafa",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{display: "inline-block"}}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            obcaecati illo nulla! Explicabo optio, ducimus iure veritatis quae
            blanditiis sint aspernatur vitae dolor cum odio assumenda autem
            perferendis quo minus!
          </p>
          <div>
            <Link
              href="mailto:mustafaguer@outlook.com"
              className="px-6 py-3 inline-block rounded-full mr-4 w-full sm:w-fit 
              bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/documents/CV_Mustafa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 inline-block mt-3 rounded-full 
            bg-gradient-to-br from-primary-500 to-secondary-500 w-full sm:w-fit hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[300px] md:[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover object-center"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
