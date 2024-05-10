import { motion } from "framer-motion";
import { useState } from "react";

const Jobs = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

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

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    // duration: 2,
  };

  return (
    <motion.div
      id="jobs"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="max-w-7xl mx-auto "
    >
      <div className="w-full flex justify-between gap-5 md:items-center py-5 flex-col sm:flex-row">
        <h1 className="text-4xl sm:text-6xl text-white font-bold">Jobs</h1>

        <div className="flex gap-3 w-full sm:w-auto items-center justify-center">
          <p onClick={() => setIsOn(false)} className="text-white cursor-pointer">
            Empresas
          </p>

          <div className="switch " data-isOn={isOn} >
            <motion.div className="handle" layout transition={spring} />
          </div>
          <p onClick={() => setIsOn(true)} className="text-white cursor-pointer">
            Personales
          </p>
        </div>
      </div>

      <motion.div
        variants={cardVariants}
        className="flex m-auto gap-8 flex-wrap items-center justify-center pb-16 lg:p-14"
      ></motion.div>
    </motion.div>
  );
};

export default Jobs;
