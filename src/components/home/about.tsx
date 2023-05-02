// Types
import type { FC } from 'react';

// Images
import Image from 'next/image';
import AboutImage from '@images/home/about/objective.png';

// Icons
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';



const About: FC = () => {
    return (
        <>
            <div className="cta_wrapper__YNWOe my-16 md:mt-0">
                <div className="container mx-auto jsx-499702677 geist-container">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-[1px] h-24 bg-gradient-to-t from-primary-button to-black"></div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-button to-orange-900"></div>
                    </div>
                    <h5
                        className=" text-3xl lg:text-5xl leading-9 text-center font-['Inter'] text-white mt-5 pt-4
                        font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-button to-orange-700"
                    >
                        Acerca de nosotros
                    </h5>
                    <div
                        className="flex flex-col md:flex-row mx-6 mb-12"
                    >
                        <div className="w-full mt-8 lg:mt-0 lg:w-5/12 flex flex-col justify-center">
                            <p className="font-normal text-base leading-6 text-gray-200 text-left hover:text-white cursor-pointer">
                                <ArrowLongRightIcon className="w-4 h-4 bg-zinc-900 border border-zinc-800 inline-block mr-3" />{' '}
                                Somos una empresa que se dedica al desarrollo de soluciones tecnológicas basadas en
                                blockchain. Nuestra experiencia en la creación de tecnología basada en blockchain, nos
                                permite ofrecer aplicaciones que mejoran la calidad de vida de las personas.
                            </p>{' '}
                            <br />
                            <p className="font-normal text-base leading-6 text-gray-200 text-left hover:text-white cursor-pointer">
                                <ArrowLongRightIcon className="w-4 h-4 bg-zinc-900 border border-zinc-800 inline-block mr-3" />{' '}
                                Desde nuestro comienzo hemos fomentado el desarrollo y uso de la tecnología blockchain,
                                donde nuestro principal objetivo es dar a conocer la misma, por medio de cursos,
                                eventos, conferencias y desarrollo de la misma tecnología.
                            </p>
                        </div>
                        <div
                            className="mx-auto flex justify-center items-center"
                        >
                            <Image
                                alt="Blockchain Business School About/Objectives"
                                src={AboutImage}
                                width={400}
                                height={400}
                                draggable={false}
                                decoding="async"
                                loading="lazy"
                            />{' '}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;