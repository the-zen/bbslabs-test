// Types
import type { FC } from "react";

// Images
import Image from "next/image";
import CameraImage from "@images/home/secondaryGrid/camera.png";
import MegaphoneImage from "@images/home/secondaryGrid/megaphone.png";
import CalenderImage from "@images/home/secondaryGrid/calender.png";
import FolderImage from "@images/home/secondaryGrid/folder.png";
import BlockchainBusinessSchoolLogo from "@images/home/bbs/logo-white.svg";

// Utils
import Link from "next/link";

const secondaryGrid: FC = ({}) => {
  return (
    <>
      <div className="geist-wrapper">
        <div className="announcement-grid-layout_grid__n3Uym announcement-grid-layout_vercel__XtS4u container mx-auto text-white">
          {/* 1 */}
          <Link
            href="/labs/learning"
            passHref
            target="_blank"
            className="announcement-grid-layout_majorFeat0__B5M_T cursor-pointer bg-black transition-colors duration-200 hover:bg-[#111111]"
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
            <h4 className="text-2xl font-semibold text-white">Our courses</h4>
            <p className="mb-2 mt-6 text-zinc-400">
              We offer a wide range of courses to help you learn and grow.
            </p>
          </Link>
          {/* 2 */}
          <Link
            href="/blog"
            passHref
            target="_blank"
            className="announcement-grid-layout_minorFeat1__Px61F cursor-pointer bg-black transition-colors duration-200  hover:bg-[#111111]"
          >
            <div className="tag_tag__DS4ok">Beta</div>
            <h4 className="text-2xl font-semibold text-white">Web3 blog</h4>
            <p className="mb-2 mt-6 text-zinc-400">
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
            className="announcement-grid-layout_minorFeat0__6eAtI cursor-pointer bg-black transition-colors duration-200  hover:bg-[#111111]"
          >
            <h4 className="text-2xl font-semibold text-white">
              Events and conferences
            </h4>
            <p className="mb-2 mt-6 text-zinc-400">
              Join us for our latest events, meetups or talks and meet other
              developers.
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
            className="announcement-grid-layout_majorFeat1__o4ijj cursor-pointer bg-black transition-colors duration-200  hover:bg-[#111111]"
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
            <h4 className="text-2xl font-semibold text-white">Projects</h4>
            <p className="mb-2 mt-6 text-zinc-400">
              See a list of projects that we are working on, we are always
              looking for new ideas.
            </p>
          </Link>
          {/* 5 */}
          <Link
            href="/labs"
            passHref
            target="_blank"
            className="tilt-card_root__5ySPn announcement-grid-layout_featured__PMDpN cursor-pointer bg-black transition-colors duration-200 hover:bg-[#111111]"
          >
            <div className="relative -ml-4 mb-16">
              <div className="absolute z-40 -ml-10 h-48 w-48 bg-zinc-300 opacity-60 blur-3xl"></div>
              <div className="relative z-50 -ml-4 h-32 w-32">
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
            <h4 className="font-['Inter'] text-5xl font-bold text-zinc-100">
              Labs
            </h4>
            <p className="mt-16 text-zinc-400">
              Register for our Labs program and get access to the incubation
              program.
            </p>
          </Link>
        </div>
      </div>
      {/* <Divider /> */}
    </>
  );
};
export default secondaryGrid;
