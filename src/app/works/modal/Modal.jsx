import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "../../globals.css";

const scaleAnimation = {
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

function Modal({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    let moveContX = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let moveContY = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveContX(pageX);
      moveContY(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"} // Change "open" to "enter"
        className="h-[350px] w-[400px] overflow-hidden pointer-events-none absolute flex items-center justify-center"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="h-full w-full absolute transition-top"
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="relative h-full group flex items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={cursor}
        className="w-[70px] h-[70px] bg-[#455CE9] absolute pointer-events-none rounded-full flex items-center justify-center"
      >
        <motion.div
          ref={cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="bg-transparent text-white"
        >
          View
        </motion.div>
      </motion.div>
    </>
  );
}

export default Modal;
