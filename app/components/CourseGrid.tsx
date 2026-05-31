"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function CoursesGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      {children}
    </motion.section>
  );
}
