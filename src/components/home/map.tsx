// Types
import type { FC } from 'react';

// Images
import Image from 'next/image';
import CompleteMap from '@images/home/map/complete-map.png';
import HalfMap from '@images/home/map/half-map.png';

// Animations
import { motion } from 'framer-motion';


const map: FC = () => {
  return (
    <>
      <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container sm:-mt-12 lg:mb-56 xl:mb-32">
        <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
          <div className="w-full xl:h-full h-96 object-cover sm:block hidden">
            <Image src={CompleteMap} alt="Complete map" draggable={false} />
          </div>
          <div className="sm:hidden -mt-10 block w-full h-96 object-cover  absolute z-0">
            <Image src={HalfMap} alt="Half map" draggable={false} layout="fill" />
          </div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 10 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full  sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-16"
          >
            <p className="text-xl sm:text-left text-center lg:text-3xl font-semibold text-white">
              Proyectos
            </p>
            <p className="text-base sm:text-left text-center leading-4 xl:mt-4 mt-2 text-gray-200">
              En desarrollo
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 10 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full  sm:absolute relative z-20  mt-4 xl:mt-80 sm:mt-40 xl:-ml-0 sm:-ml-12"
          >
            <p className="text-xl sm:text-left text-center lg:text-3xl font-semibold text-white">
              Desarrolladores
            </p>
            <p className="text-base sm:text-left text-center leading-4 xl:mt-4 mt-2 text-gray-200">
              De todo el mundo
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 10 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="shadow-lg xl:p-6 p-4 sm:w-auto w-full  sm:absolute relative z-20 md:mt-0 sm:-mt-9 mt-4 right-0 xl:mr-56 sm:mr-24"
          >
            <p className="text-xl sm:text-left text-center lg:text-3xl font-semibold text-white">
              Escalabilidad
            </p>
            <p className="text-base sm:text-left text-center leading-4 xl:mt-4 mt-2 text-gray-200">
              A tu medida
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default map;