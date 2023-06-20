// Types
import type { FC } from "react";

// Images
import Image from "next/image";
import CompleteMap from "@images/home/map/complete-map.png";
import HalfMap from "@images/home/map/half-map.png";

// Animations
import { motion } from "framer-motion";

const map: FC = () => {
  return (
    <>
      <div className="px-6 py-20 xl:container sm:-mt-12 lg:mb-56 xl:mx-auto xl:mb-32 xl:px-20">
        <div className="relative mt-4 items-center justify-center sm:flex md:mt-14">
          <div className="hidden h-96 w-full object-cover sm:block xl:h-full">
            <Image src={CompleteMap} alt="Complete map" draggable={false} />
          </div>
          <div className="absolute z-0 -mt-10 block h-96 w-full object-cover sm:hidden">
            <Image src={HalfMap} alt="Half map" draggable={false} />
          </div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 10 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative left-0 z-20 mt-4 w-full  p-4 shadow-lg sm:absolute sm:-mt-16 sm:ml-12 sm:w-auto xl:-mt-40 xl:ml-56 xl:p-6"
          >
            <p className="text-center text-xl font-semibold text-white sm:text-left lg:text-3xl">
              Proyectos
            </p>
            <p className="mt-2 text-center text-base leading-4 text-gray-200 sm:text-left xl:mt-4">
              En desarrollo
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 10 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-20 mt-4 w-full p-4  shadow-lg sm:absolute sm:-ml-12  sm:mt-40 sm:w-auto xl:-ml-0 xl:mt-80 xl:p-6"
          >
            <p className="text-center text-xl font-semibold text-white sm:text-left lg:text-3xl">
              Desarrolladores
            </p>
            <p className="mt-2 text-center text-base leading-4 text-gray-200 sm:text-left xl:mt-4">
              De todo el mundo
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 10 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative right-0 z-20 mt-4 w-full  p-4 shadow-lg sm:absolute sm:-mt-9 sm:mr-24 sm:w-auto md:mt-0 xl:mr-56 xl:p-6"
          >
            <p className="text-center text-xl font-semibold text-white sm:text-left lg:text-3xl">
              Escalabilidad
            </p>
            <p className="mt-2 text-center text-base leading-4 text-gray-200 sm:text-left xl:mt-4">
              A tu medida
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default map;
