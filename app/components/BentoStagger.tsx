"use client";

import { Children, type ReactNode } from "react";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const BentoStagger = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section
      className="grid grid-cols-12 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {Children.toArray(children).map((child, index) => (
        <motion.div
          key={index}
          className={
            index === 0
              ? "col-span-12 md:col-span-8"
              : index === 1
                ? "col-span-12 md:col-span-4"
                : "col-span-12"
          }
          variants={item}
        >
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default BentoStagger;
