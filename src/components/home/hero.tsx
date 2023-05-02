// Types
import type { FC } from 'react';

// Animations
import { motion } from "framer-motion";

// Images
import Image from 'next/image';
import CompleteLogoImage from '@images/home/bbs/complete-logo-white.png';

// Icons
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Utils
import Link from 'next/link';

const Hero: FC = () => {
    return (
        <>
            <div className="bg-[url('../assets/background.svg')] bg-cover bg-no-repeat bg-opacity-20">
                <div className="flex h-screen relative justify-center flex-wrap items-center bg-opacity-10 bg-black">
                    <div className="w-full px-8 mt-32">
                        <div className="flex justify-center" >
                            <Image src={CompleteLogoImage} width={200} height={65} alt={''} />
                        </div>
                        <div className="relative text-center text-white text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-['Inter'] font-bold">
                            Blockchain without limits
                        </div>
                        <h2
                            className="text-gray-200 text-center text-lg px-12 mb-8"

                        >
                            Incuba tu proyecto con nosotros y adentrate en el mundo de{' '}
                            <b className="font-black text-[#fff]">Blockchain.</b>
                        </h2>
                        <div className="mt-16" >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-center mb-8 sm:mb-2 text-white">
                                <Link href="/labs/incubation"
                                    legacyBehavior
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative shadow-xl my-2 flex flex-col items-center justify-center text-sm font-semibold px-6 mx-1 py-[.85rem] sm:py-3 sm:px-8  bg-primary-button rounded-3xl mr-5  cursor-pointer transition-colors duration-200"
                                    >
                                        Despliega con nosotros
                                    </motion.button>
                                </Link>
                                <Link href="/events"
                                    legacyBehavior
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="relative flex items-center my-2 justify-center shadow-xl text-sm  font-semibold px-6 mx-1 py-[.85rem] sm:py-3 sm:px-8 bg-[#ffffff0c] rounded-3xl mr-5 cursor-pointer transition-colors duration-200"
                                        onClick={() => console.log('click')}
                                    >
                                        Eventos
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}
export default Hero;