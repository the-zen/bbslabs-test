// Types
import type { FC } from "react";

// Images
import Image from "next/image";
import LabsImage from "@images/home/lab.png";

// Components
import Divider from "./addOns/Divider";

// Utils
import Link from "next/link";

const Labs: FC = ({}) => {
  return (
    <>
      <div className="container mx-auto px-1 pb-12">
        <div className="relative isolate flex flex-col items-center pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
          <div
            className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#222222] to-[#fff] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
              }}
            />
          </div>
          <div className="mb-16 flex justify-center">
            <h5 className="mb-5 pt-4 text-center font-['Inter'] text-3xl font-bold leading-9 text-white lg:text-5xl">
              Ingresa a nuestros laboratorios y descubre como puedes acelerar
              tus proyectos
            </h5>
          </div>
          <Link
            href="/labs"
            passHref
            className="mb-10 flex items-center justify-center sm:mb-20"
          >
            <button
              className=" rounded border border-white
                            bg-transparent px-8 py-3 text-sm 
                            text-white ring-offset-[#FFA600] transition duration-150 ease-in-out 
                            hover:border-[#FFA600] hover:text-[#FFA600] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 lg:text-xl"
            >
              Blockchain Labs
            </button>
          </Link>
        </div>
        <div className="= -mt-20 flex justify-center sm:-mt-40 md:-mt-64">
          <div className="h-3/5 w-3/5 sm:h-1/2 sm:w-1/2">
            <Image
              src={LabsImage}
              alt="Blockchain Business School Labs"
              draggable={false}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* <Divider /> */}
    </>
  );
};
export default Labs;
