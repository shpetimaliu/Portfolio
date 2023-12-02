import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "../../globals.css";

const scaleAnime = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

function Modal({ projects, modal }) {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    let moveContX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let moveContY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let moveCoursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let moveCoursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    let moveCoursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let moveCoursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      let rect = container.current.getBoundingClientRect();
      let mouseX = e.clientX - rect.left;
      let mouseY = e.clientY - rect.top;

      moveContX(mouseX);
      moveContY(mouseY);
      moveCoursorLabelX(mouseX);
      moveCoursorLabelY(mouseY);
      moveCoursorX(mouseX);
      moveCoursorY(mouseY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnime}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="h-[350px] w-[400px] overflow-hidden pointer-events-none absolute flex items-center justify-center"
        id="container"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute transition-top"
          id="slider"
        >
          {projects.map((project, index) => (
            <div
              key={`modal_${index}`}
              style={{ backgroundColor: project.color }}
              className="relative h-full group flex items-center justify-center"
              id="modal"
            >
              <Image
                src={`/images/${project.src}`}
                alt="images"
                width={300}
                height={0}
                className="group:h-auto"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnime}
        initial="initial"
        animate={active ? "open" : "closed"}
        ref={cursor}
        className="w-[70px] group text-white text-center h-[70px] bg-[#455CE9] absolute pointer-events-none rounded-[50%] flex items-center justify-center"
      >
        <motion.div
          ref={cursorLabel}
          variants={scaleAnime}
          initial="initial"
          animate={active ? "open" : "closed"}
          className="bg-transparent"
        >
          View
        </motion.div>
      </motion.div>
    </>
  );
}

export default Modal;
