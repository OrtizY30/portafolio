import React from "react";
import { motion } from "framer-motion";
import html from "/img/skills/html.png";
import css from "/img/skills/css.png";
import js from "/img/skills/js.png";
import git from "/img/skills/git.png";
import react from "/img/skills/react.png";
import next from "/img/skills/next.png";
import ts from "/img/skills/ts.png";
import node from "/img/skills/nodejs.png";
import tailwind from "/img/skills/tailwind.png";
import mui from "/img/skills/mui.png";
const Skills = () => {
  const cardVariants = {
    offscreen: {
      y: 350,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  return (
    <motion.div
      className="pt-14  max-w-7xl mx-auto  flex flex-col gap-12 p-2 border-b border-gray-700 overflow-hidden"
      id="skills"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h1 className="text-4xl sm:text-6xl text-white font-bold">Skills</h1>

      <motion.div
        variants={cardVariants}
        className="flex m-auto gap-8 flex-wrap items-center justify-center pb-16 lg:p-14"
      >
        <img src={html} alt="logo" className="w-20 md:w-28 " />
        <img src={css} alt="logo" className="w-16 md:w-24 " />
        <img src={js} alt="logo" className="w-16 md:w-24 " />
        <img src={git} alt="logo" className="w-16 md:w-24 " />
        <img src={react} alt="logo" className="w-16 md:w-24" />
        <img
          src={next}
          alt="logo"
          className="w-20 md:w-24 bg-white/50 p-2 rounded-md"
        />
        <img src={ts} alt="logo" className="w-16 md:w-24" />
        <img src={node} alt="logo" className="w-16 md:w-24" />
        <img src={tailwind} alt="logo" className="w-40 md:w-50 md:-mt-8 " />
        <img src={mui} alt="" className="w-44 md:w-80 md:-mt-8" />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
