import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import Nav from "./Nav";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(24px at 38px 30px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Index = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`fixed top-0 p-2 -left-2 w-full  ${isOpen ? 'h-screen '  : 'h-16 '} rounded-3xl lg:hidden transition-all duration-700`}
    >
      <motion.div
        className="background "
        // absolute top-0 right-0 bottom-0 bg-white/90 rounded-bl-3xl
        variants={sidebar}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <Nav toggle={() => toggleOpen()}/>
      
      </motion.div>
    </motion.nav>
  );
};
