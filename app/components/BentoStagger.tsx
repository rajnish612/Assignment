"use client";

import React, { SetStateAction, type ReactNode } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};
export const SideBarStateContext = React.createContext<{
  collapse: boolean;
  setCollapse: React.Dispatch<SetStateAction<boolean>>;
} | null>(null);
const BentoStagger = ({ children }: { children: ReactNode }) => {
  const [collapse, setCollapse] = React.useState<boolean>(true);
  return (
    <motion.section
      className="mx-auto flex  relative items-stretch  h-full justify-between  gap-6  "
      variants={container}
      initial="hidden"
      animate="show"
    >
      <SideBarStateContext.Provider value={{ collapse, setCollapse }}>
        <div
          onClick={() => setCollapse(false)}
          className="rounded-full tile-surface absolute top-4 left-4 p-2"
        >
          <Menu size={20} />
        </div>
        {children}
      </SideBarStateContext.Provider>
    </motion.section>
  );
};

export default BentoStagger;
