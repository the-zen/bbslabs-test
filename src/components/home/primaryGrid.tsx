// Types
import type { FC } from 'react';

// Utils
import Link from 'next/link';

// Images
import Image from 'next/image';
import TlachiaLogo from '@images/home/logos/tlachia-logo.png'
import DappDevImage from '@images/home/primaryGrid/dapps.png'
import ChartImage from '@images/home/primaryGrid/chart.png'
import EthImage from '@images/home/primaryGrid/eth.png'
import BulbImage from '@images/home/primaryGrid/bulb.png'

// Components
import Divider from '~/components/addOns/Divider';


const primaryGrid: FC = ({ }) => {
    return (
        <>
            <div className="flex justify-center mx-4 mt-24 sm:mt-12 md:mt-6 lg:mt-3 z-50">
                <div className=" announcement-grid-layout_grid__n3Uym announcement-grid-layout_next__6dsT3 container">
                    {/* 1 */}
                    <Link href="https://www.tlachia.io" passHref target="_blank"
                        className=" tilt-card_root__5ySPn announcement-grid-layout_featured__PMDpN shadow-inner bg-black hover:bg-zinc-900 transition-colors duration-300 cursor-pointer ease-in-out"
                    >
                        <div className="tag_tag__DS4ok text-white">Beta</div>
                        <div className="relative mb-16 -ml-4">
                            <div className="bg-yellow-200 h-48 w-48 z-40 blur-3xl opacity-60 absolute -ml-10"></div>
                            <div className="h-32 w-32 z-50 relative -ml-4">
                                <Image
                                    src={TlachiaLogo}
                                    alt="Blockchain Business School x Tlachia"
                                    width={180}
                                    height={180}
                                    draggable={false}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <p className="text-white text-5xl font-['Inter'] font-bold">Tlachia</p>
                        <span className="text-zinc-300 text-xs mt-2 font-['Inter']">By Blockchain BS</span>
                        <p className="text-zinc-400 mt-16">
                            Traceability with blockchain for all kinds of products
                        </p>
                    </Link>
                    {/* 2 */}
                    <div className="announcement-grid-layout_majorFeat0__B5M_T shadow-inner bg-black hover:bg-zinc-900 transition-colors duration-300 cursor-pointer ease-in-out">
                        <Image
                            alt="Blockchain Business School Dapp development"
                            src={DappDevImage}
                            width={300}
                            height={300}
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                        <p className="text-white text-2xl font-semibold">Dapp development</p>
                        <p className="text-zinc-400 mt-6 mb-2">
                            We offer solutions for your business, project or idea based on blockchain.
                        </p>
                    </div>
                    {/* 3 */}
                    <div className="announcement-grid-layout_minorFeat0__6eAtI shadow-inner bg-black hover:bg-zinc-900 transition-colors duration-300 cursor-pointer ease-in-out">
                        <h4 className="text-white text-2xl font-semibold">Blockchain statistics</h4>
                        <p className="text-zinc-400 mt-6 mb-6">
                            Use blockchain to track and trace your products, services, and assets.
                        </p>
                        <Image
                            alt="Blockchain Business School Build's New Things"
                            src={ChartImage}
                            width={300}
                            height={300}
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                    </div>
                    {/* 4 */}
                    <div className="announcement-grid-layout_minorFeat1__Px61F shadow-inner bg-black hover:bg-zinc-900 transition-colors duration-300 cursor-pointer ease-in-out">
                        <h4 className="text-white text-4xl mt-6 ">Web3</h4>
                        <p className="text-zinc-400 mt-6 mb-2">
                            Decentralized applications, smart contracts, NFTs, DAOs, DeFi, and primaryGrid.
                        </p>
                        <div className="next-announcements_globeVisual__eBDQE">
                            <Image
                                alt="Blockchain Business School web3 development"
                                src={EthImage}
                                width={300}
                                height={300}
                                draggable={false}
                                decoding="async"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="announcement-grid-layout_majorFeat1__o4ijj shadow-inner bg-black hover:bg-zinc-900 transition-colors duration-300 cursor-pointer ease-in-out">
                        <Image
                            alt="Blockchain Business School Build's New Things"
                            src={BulbImage}
                            width={300}
                            height={300}
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                        <h4 className="text-white text-2xl font-semibold">Build new things</h4>
                        <p className="text-zinc-400 mt-6 mb-2">
                            Build with the latest tools and technologies. We are always looking for new ways to create
                            web3.
                        </p>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
}
export default primaryGrid;