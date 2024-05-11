import perfil from "/img/foto-perfil.png";
import { motion } from "framer-motion";
const Main = () => {
  const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
      className="flex flex-col-reverse lg:flex-row justify-between sm:px-10 h-full items-center border-b border-gray-700 text-center sm:text-start -mt-24 lg:my-4 pb-4"
      id="home"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 300 },
          visible,
        }}
        style={{
          "--base-width": "24vw",
          top: "-18vw",
        }}
        className="sm:w-full lg:w-1/2 sm:pr-28 flex flex-col space-y-8 mb-10"
      >
        <motion.p
          variants={itemVariants}
          className="animation  text-xl uppercase text-gray-400 font-medium tracking-widest mt-4"
        >
          frontEnd developer
        </motion.p>

        <div className="">
          <h1 className="text-white text-5xl sm:text-5xl md:text-7xl -mb-5 font-medium">
            <span className="text-red-500 font-black">Ysreimer Ortiz</span>
          </h1>
        </div>
        <p className="text-gray-300 mx-2 sm:w-[600px] ">
        ¡Hola! Soy Ysreimer Ortiz, un desarrollador web frontend especializado en ReactJS. Mi pasión es crear interfaces de usuario dinámicas y eficientes utilizando esta poderosa biblioteca. Si buscas un experto en ReactJS para llevar tus proyectos al siguiente nivel, ¡estoy aquí para ayudarte!
        </p>

        <div className="flex sm:space-x-10 justify-center sm:justify-start">
          <button className="border border-gray-100  text-gray-700 font-medium bg-gray-100 py-2 px-8 rounded-md hover:bg-transparent hover:text-gray-100 transition-all ease-in-out delay-100 hidden sm:block">
            Download CV
          </button>
          <a href="#contact">

          <button className="border text-gray-100 border-gray-100 bg-transparent font-medium py-2 px-3 md:px-8 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-all ease-in-out delay-100">
            Hire Me!
          </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -180 },
          visible,
        }}
        style={{
          "--base-width": "24vw",
          // top: "18vw",
        }}
        className="relative w-3/4 sm:w-2/5"
      >
        <div className="absolute top-[30%] lg:top-44 left-[6%] lg:left-12 flex items-center bg-gradient-to-r from-red-900 sm:from-neutral-800 from-70% rounded-tl-3xl p-3">
          <div>
            <p className="text-5xl sm:text-7xl text-gray-100 font-bold">1</p>
          </div>
          <p className="text-gray-100 text-left text-xs sm:text-sm">
            Year of <br />
            Experience
          </p>
        </div>
        <motion.img src={perfil} alt="photo profile" className="img-perfil" />
        {/* <div className="bg-red-500 w-full h-3/4 rounded-full  ">
hola
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default Main;
