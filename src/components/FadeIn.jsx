"use client";
import { motion, useReducedMotion } from "framer-motion";
import { createContext, useContext } from "react";

const FadeInStraggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

export const FadeIn = (props) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStraggerContext);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
};

export const fadeInStagger = ({ faster = false, ...props }) => {
  return (
    <FadeInStraggerContext value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      ></motion.div>
    </FadeInStraggerContext>
  );
};
