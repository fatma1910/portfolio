import React from "react";
import { motion } from "framer-motion";

type TabButtonProps = {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
  };

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }:TabButtonProps) => {
  const buttonClasses = active ? "text-white  border-b-2 border-purple-500 " : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white    ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>
    </button>
  );
};

export default TabButton;