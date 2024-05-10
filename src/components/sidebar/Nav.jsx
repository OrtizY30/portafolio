import * as React from "react";
import { motion } from "framer-motion";
import linksMenu from "../../links/linksMenu";

const Nav = ({ toggle }) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variantsLinks = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.ul
      variants={variants}
      className="p-6 absolute top-24 h-96 flex flex-col justify-between"
    >
      {linksMenu.map((item, i) => (
        <motion.li
          onClick={toggle}
          variants={variantsLinks}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          <box-icon type='solid' name={item.icon} size='md' color='rgb(127 29 29)'  ></box-icon>
          <a
            href={item.path}
            className="text-gray-400 font-bold text-2xl  cursor-pointer hover:text-red-500 transition-all ease-in-out delay-100 "
          >
            {item.name}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Nav;
