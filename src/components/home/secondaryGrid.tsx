// Types
import type { FC } from 'react';

// Images
import Image from 'next/image';
import CameraImage from '@images/home/secondaryGrid/camera.png';
import MegaphoneImage from '@images/home/secondaryGrid/megaphone.png';
import CalenderImage from '@images/home/secondaryGrid/calender.png';
import FolderImage from '@images/home/secondaryGrid/folder.png';
import BlockchainBusinessSchoolLogo from '@images/home/bbs/logo-white.svg';
import Divider from './../addOns/Divider';
import Link from 'next/link';

const secondaryGrid: FC = ({ }) => {
    return (
        <>
            <div className="geist-wrapper">
                <div className="announcement-grid-layout_grid__n3Uym announcement-grid-layout_vercel__XtS4u text-white container mx-auto px-4">
                    {/* 1 */}
                    <Link
                        href="/labs/learning"
                        passHref
                        target="_blank"
                        className="announcement-grid-layout_majorFeat0__B5M_T bg-black hover:bg-zinc-900 transition-colors duration-200 cursor-pointer"
                    >
                        <Image
                            alt="Blockchain Business School Courses"
                            src={CameraImage}
                            width={180}
                            height={180}
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                        <h4 className="text-white text-2xl font-semibold">Our courses</h4>
                        <p className="text-zinc-400 mt-6 mb-2">
                            We offer a wide range of courses to help you learn and grow.
                        </p>
                    </Link>
                    {/* 2 */}
                    <Link
                        href="/blog"
                        passHref
                        target="_blank"
                        className="announcement-grid-layout_minorFeat1__Px61F bg-black hover:bg-zinc-900 transition-colors duration-200  cursor-pointer"
                    >
                        <div className="tag_tag__DS4ok">Beta</div>
                        <h4 className="text-white text-2xl font-semibold">Web3 blog</h4>
                        <p className="text-zinc-400 mt-6 mb-2">
                            Learn about the latest trends, news, and updates in the Web3
                        </p>
                        <Image
                            src={MegaphoneImage}
                            alt="Blockchain Business School Blog"
                            width={180}
                            height={180}
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                    </Link>
                    {/* 3 */}
                    <Link
                        href="/events"
                        passHref
                        target="_blank"
                        className="announcement-grid-layout_minorFeat0__6eAtI bg-black hover:bg-zinc-900 transition-colors duration-200  cursor-pointer"
                    >
                        <h4 className="text-white text-2xl font-semibold">Events and conferences</h4>
                        <p className="text-zinc-400 mt-6 mb-2">
                            Join us for our latest events, meetups or talks and meet other developers.
                        </p>
                        <Image
                            src={CalenderImage}
                            alt="Blockchain Business School events and conferences"
                            width={180}
                            height={180}
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                    </Link>
                    {/* 4 */}
                    <Link
                        href="/projects"
                        passHref
                        target="_blank"
                        className="announcement-grid-layout_majorFeat1__o4ijj bg-black hover:bg-zinc-900 transition-colors duration-200  cursor-pointer"
                    >
                        <Image
                            src={FolderImage}
                            alt="Blockchain Business School Projects"
                            width={180}
                            height={180}
                            draggable={false}
                            decoding="async"
                            loading="lazy"
                        />
                        <h4 className="text-white text-2xl font-semibold">Projects</h4>
                        <p className="text-zinc-400 mt-6 mb-2">
                            See a list of projects that we are working on, we are always looking for new ideas.
                        </p>
                    </Link>
                    {/* 5 */}
                    <Link
                        href="/labs"
                        passHref
                        target="_blank"
                        className="tilt-card_root__5ySPn announcement-grid-layout_featured__PMDpN bg-black hover:bg-zinc-900 transition-colors duration-200 cursor-pointer"
                    >
                        <div className="relative mb-16 -ml-4">
                            <div className="bg-zinc-300 h-48 w-48 z-40 blur-3xl opacity-60 absolute -ml-10"></div>
                            <div className="h-32 w-32 z-50 relative -ml-4">
                                <Image
                                    src={BlockchainBusinessSchoolLogo as string}
                                    alt="Blockchain Business School Labs"
                                    width={200}
                                    height={200}
                                    draggable={false}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <h4 className="text-zinc-100 text-5xl font-['Inter'] font-bold">Labs</h4>
                        <p className="text-zinc-400 mt-16">
                            Register for our Labs program and get access to the incubation program.
                        </p>
                    </Link>
                </div>
            </div>
            <Divider />
        </>
    );
}
export default secondaryGrid;