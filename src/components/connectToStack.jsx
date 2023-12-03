"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import line from "../images/line.svg";
import stars from "../images/stars-github.webp";

const ConnectToStack = () => {
  const lineVariant = {
    hidden: { height: 0 },
    show: { height: "100%" },
  };
  return (
    <div className="flex relative md:pl-10 custom-height">
      <Image
        alt="Stars image from github"
        aria-hidden="true"
        width="2712"
        height="2712"
        className="absolute top-0 right-0 h-auto pointer-events-none"
        loading="lazy"
        decoding="async"
        src={stars}
      />
      <div className="flex items-center flex-row relative">
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ duration: 0.3 }}
          className="w-[3px] h-full increase origin-top"
        >
          <Image
            alt="line"
            aria-hidden="true"
            width="81"
            height="285"
            style={{
              left: "calc(50% - 2px)",
              height: "auto",
              maxWidth: "19vw",
              transitionDelay: "100ms",
            }}
            className="hidden md:block absolute bottom-[-12rem] left-0 md:bottom-[-12rem] md:left-0 lg:left-[-5%] xl:left-[-5%] 2xl:left-[-5%]"
            loading="lazy"
            decoding="async"
            src={line}
          />
        </motion.div>
      </div>
      <div className="lg:pl-24 md:pl-16 pl-6">
        <div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="h-full w-[3px] max-md:w-[2px] mt-7 rounded-md bg-gray bg-[#7ee787]"
          ></motion.div>
          <div className="py-4 sm:text-center md:text-left">
            <h3 className="text-[#7ee787] mb-2 mt-[5rem] lg:text-6xl md:text-5xl text-3xl font-medium">
              Some of the technologies and programming languages
            </h3>
            <p className="mb-3 md:text-xl text-base font-medium text-white">
              Which I know and used
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToStack;
