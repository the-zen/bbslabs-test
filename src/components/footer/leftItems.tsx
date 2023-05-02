// Types
import type { FC } from 'react';

// Animations
import { motion } from 'framer-motion';

// Images
import Image from 'next/image';
import WhiteLogo from '@images/home/bbs/complete-logo-white.png';


const leftItems: FC = ({ }) => {
    return (
        <>
            <div className="flex flex-col flex-shrink-0 mb-12">
                <div>
                    <Image src={WhiteLogo} width={300} height={100} alt="Logo" draggable={false} />
                </div>
                <div className="flex items-center gap-x-4 mt-4">
                    <motion.a
                        href="https://www.instagram.com/blockchainbusinessschool/"
                        target='_blank'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex-shrink-0 bg-[#ffa600] cursor-pointer hover:bg-[#CE8A0D] rounded-full flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x={4} y={4} width={16} height={16} rx={4} />
                            <circle cx={12} cy={12} r={3} />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/blockchainbusinessschool"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex-shrink-0 bg-[#ffa600] cursor-pointer hover:bg-[#CE8A0D] rounded-full flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </motion.a>
                    <motion.a
                        href='https://www.linkedin.com/company/blockchain-business-school/'
                        target='_blank'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex-shrink-0 bg-[#ffa600] cursor-pointer hover:bg-[#CE8A0D] rounded-full flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width={25} height={25} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x={4} y={4} width={16} height={16} rx={2} />
                            <line x1={8} y1={11} x2={8} y2={16} />
                            <line x1={8} y1={8} x2={8} y2="8.01" />
                            <line x1={12} y1={16} x2={12} y2={11} />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </motion.a>
                </div>
                <p className="text-sm leading-none text-gray-300 mt-4">
                    Copyright ©Blockchain Business School 2022
                </p>
                <p className="text-sm leading-none text-gray-300 mt-4">All rights reserved</p>
            </div>
        </>
    );
}
export default leftItems;