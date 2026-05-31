"use client";

import { Children, type ReactNode } from "react";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const BentoStagger = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section
      className="relative mx-auto flex min-h-screen max-w-6xl gap-6 px-4 py-8 sm:px-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.section>
  );
};

export default BentoStagger;
