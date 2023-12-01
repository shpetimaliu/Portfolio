"use client";

import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";
import Container from "./Container";

function Experience({ props }) {
  return (
    <div className="mt-24 bg-[#0D0F16] sm:grid-cols-5 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <div className="max-w-[80rem] mx-auto text-white">
          <div className="flex md:pl-10 space-x-3 md:space-x-10">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
                className="relative"
              >
                <svg
                  aria-hidden="true"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  version="1.1"
                  width="24"
                  data-view-component="true"
                  className="octicon octicon-briefcase text-white"
                >
                  <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
                </svg>
                <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
              </motion.div>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="h-full w-[3px] max-md:w-[2px] mt-7 rounded-md bg-gray bg-[#7ee787]"
              ></motion.div>
            </div>
            <div className="md:w-10/12 mb-24">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: false }}
                className="text-[22px] md:text-2xl mb-7 font-bold text-white"
              >
                Experience
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: false }}
                className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-bold"
              >
                <span className="text-[#7ee787]">
                  Lorem ipsum text here is{" "}
                </span>
                OpenAi is the great right now and very usefull like me
              </motion.div>
            </div>
          </div>
          <CodeEditor />
        </div>
      </Container>
    </div>
  );
}

export default Experience;
