import { motion } from "framer-motion";
import React from "react";

const cardVariants = {
  offscreen: {
    y: 300,
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
const Contact = () => {
  return (
    <motion.div
      className="pt-14 max-w-7xl mx-auto overflow-hidden h-screen flex flex-col items-start justify-center gap-4 p-2 border-b border-gray-700"
      id="contact"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h1 className="text-4xl sm:text-6xl text-white font-bold">Contact Me</h1>
      <motion.form
       variants={cardVariants}
        action="
        "
        className="flex flex-col w-full mx-auto gap-10 justify-start p-1 sm:p-10 items-start bg-black/30 rounded-lg"
      >
        <div className="flex flex-col sm:flex-row w-full gap-10">
          <input
            className="bg-white/20  border outline-none border-gray-700 sm:w-1/2 p-3 rounded-md text-white"
            type="text"
            placeholder=" Name "
            id="name"
            required
          />
          <input
            className="bg-white/20 outline-none border border-gray-700 sm:w-1/2 p-3 rounded-md text-white "
            type="text"
            placeholder="Bussine"
            id="bussine"
          />
        </div>
        <input
          className="bg-white/20 outline-none border border-gray-700 w-full p-3 rounded-md text-white "
          type="text"
          placeholder="Matter"
          id="affair"
          required
        />
        <input
          className="bg-white/20 border outline-none border-gray-700  p-3 rounded-md text-white w-full"
          type="email"
          placeholder="Email"
          name=""
          id="email"
          required
        />
        <textarea
          className="bg-white/20 border border-gray-700 outline-none  p-3 rounded-md text-white w-full"
          name="message"
          id=""
          placeholder="Message "
          rows="6"
        ></textarea>

        <input
          type="submit"
          className="cursor-pointer border border-gray-100 -mt-6 text-gray-700 font-medium bg-gray-100 py-2 px-8 rounded-md hover:bg-gray-100/30 hover:text-gray-100 transition-all ease-in-out delay-100"
        />
      </motion.form>
    </motion.div>
  );
};

export default Contact;
