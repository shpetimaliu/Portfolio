"use client";
import { motion } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "../app/globals.css";

function ArtWorks() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center sm:h-[70vh] h-[78vh] px-[5%] select-none">
        <div>
          <h1 className="md:text-[4.5rem] text-[3rem] uppercase leading-[1.2]">
            <span className="text-gray-500">FREELANCER</span> Web Developer{" "}
            <span>& </span>
            Product Creator
          </h1>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-full pt-16">
          <div className="md:w-[550px] w-[370px] flex flex-col gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "tween" }}
              className="md:pr-6"
            >
              <a
                href="/cv.pdf"
                className="flex text-white justify-between hover:bg-black/80 px-1 pl-4 items-center gap-4 py-[5px] rounded-full bg-black"
              >
                SEE MY CV <BsFillArrowRightCircleFill size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtWorks;
