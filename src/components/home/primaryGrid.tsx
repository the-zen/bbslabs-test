// Types
import type { FC } from "react";

// Utils
import Link from "next/link";

// Images
import Image from "next/image";
import TlachiaLogo from "@images/home/logos/tlachia-logo.png";
import DappDevImage from "@images/home/primaryGrid/dapps.png";
import ChartImage from "@images/home/primaryGrid/chart.png";
import EthImage from "@images/home/primaryGrid/eth.png";
import BulbImage from "@images/home/primaryGrid/bulb.png";

// Components
import Divider from "~/components/home/addOns/Divider";

const primaryGrid: FC = ({}) => {
  return (
    <>
      <div className="z-50 mx-8 mt-24 flex justify-center sm:mt-12 md:mt-6 lg:mt-3">
        <div className=" announcement-grid-layout_grid__n3Uym announcement-grid-layout_next__6dsT3 container">
          {/* 1 */}
          <Link
            href="https://www.tlachia.io"
            passHref
            target="_blank"
            className=" tilt-card_root__5ySPn announcement-grid-layout_featured__PMDpN cursor-pointer bg-black shadow-inner transition-colors duration-300 ease-in-out hover:bg-[#111111]"
          >
            <div className="tag_tag__DS4ok text-white">Beta</div>
            <div className="relative -ml-4 mb-16">
              <div className="absolute z-40 -ml-10 h-48 w-48 bg-yellow-200 opacity-60 blur-3xl"></div>
              <div className="relative z-50 -ml-4 h-32 w-32">
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
            <p className="font-['Inter'] text-5xl font-bold text-white">
              Tlachia
            </p>
            <span className="mt-2 font-['Inter'] text-xs text-zinc-300">
              By Blockchain BS
            </span>
            <p className="mt-16 text-zinc-400">
              Traceability with blockchain for all kinds of products
            </p>
          </Link>
          {/* 2 */}
          <Link
            href="/about/dapp"
            passHref
            target="_blank"
            className="announcement-grid-layout_majorFeat0__B5M_T cursor-pointer bg-black shadow-inner transition-colors duration-300 ease-in-out hover:bg-[#111111]"
          >
            <Image
              alt="Blockchain Business School Dapp development"
              src={DappDevImage}
              width={300}
              height={300}
              draggable={false}
              decoding="async"
              loading="lazy"
            />
            <p className="text-2xl font-semibold text-white">
              Dapp development
            </p>
            <p className="mb-2 mt-6 text-zinc-400">
              We offer solutions for your business, project or idea based on
              blockchain.
            </p>
          </Link>
          {/* 3 */}
          <Link
            href="/about/stats"
            passHref
            target="_blank"
            className="announcement-grid-layout_minorFeat0__6eAtI cursor-pointer bg-black shadow-inner transition-colors duration-300 ease-in-out hover:bg-[#111111]"
          >
            <h4 className="text-2xl font-semibold text-white">
              Blockchain statistics
            </h4>
            <p className="mb-6 mt-6 text-zinc-400">
              Use blockchain to track and trace your products, services, and
              assets.
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
          </Link>
          {/* 4 */}
          <Link
            href="/about/web3"
            passHref
            target="_blank"
            className="announcement-grid-layout_minorFeat1__Px61F cursor-pointer bg-black shadow-inner transition-colors duration-300 ease-in-out hover:bg-[#111111]"
          >
            <h4 className="mt-6 text-4xl text-white ">Web3</h4>
            <p className="mb-2 mt-6 text-zinc-400">
              Decentralized applications, smart contracts, NFTs, DAOs, DeFi, and
              primaryGrid.
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
          </Link>
          {/* 5 */}
          <Link
            href="/about/consulting"
            passHref
            target="_blank"
            className="announcement-grid-layout_majorFeat1__o4ijj cursor-pointer bg-black shadow-inner transition-colors duration-300 ease-in-out hover:bg-[#111111]"
          >
            <Image
              alt="Blockchain Business School Build's New Things"
              src={BulbImage}
              width={300}
              height={300}
              draggable={false}
              decoding="async"
              loading="lazy"
            />
            <h4 className="text-2xl font-semibold text-white">
              Build new things
            </h4>
            <p className="mb-2 mt-6 text-zinc-400">
              You have an idea, we have the tools to make it happen. Use our AI
              to find the best solution for your business.
            </p>
          </Link>
        </div>
      </div>
      <Divider />
    </>
  );
};
export default primaryGrid;
