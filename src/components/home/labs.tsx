// Types
import type { FC } from 'react';

// Animations
import { motion } from "framer-motion";

// Images
import Image from 'next/image';
import LabsImage from '@images/home/lab.png';
import Divider from './../addOns/Divider';



const Labs: FC = ({ }) => {
    return (
        <>
            <motion.div
                className="container px-1 pb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 10 }}
                transition={{ duration: 2, delay: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col items-center pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                    <div className="flex justify-center mb-16">
                        <h5 className="text-3xl lg:text-5xl font-bold leading-9 text-center font-['Inter'] text-white mb-5 pt-4">
                            Ingresa a nuestros laboratorios y descubre como puedes acelerar tus proyectos
                        </h5>
                    </div>
                    <div className="flex justify-center items-center mb-10 sm:mb-20">
                        <button
                            className=" hover:text-[#FFA600] lg:text-xl hover:border-[#FFA600]
                            bg-transparent transition duration-150 ease-in-out 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-[#FFA600] focus:ring-white 
                            rounded border border-white text-white px-8 py-3 text-sm"
                        >
                            Blockchain Labs
                        </button>
                    </div>
                </div>
                <div className="= flex justify-center md:-mt-64 -mt-20 sm:-mt-40">
                    <motion.div
                        className="w-3/5 sm:w-1/2 h-3/5 sm:h-1/2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 10 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={LabsImage}
                            alt="Blockchain Business School Labs"
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </motion.div>
            <Divider />
        </>
    );
}
export default Labs;