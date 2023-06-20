// Types
import type { FC } from "react";

// Images
import Image from "next/image";
import TlachiaLogo from "@images/home/logos/tlachia-logo.png";
import EtherfuseLogo from "@images/home/logos/etherfuse.png";
import EthereumLogo from "@images/home/logos/ethereum.png";
import SolanaLogo from "@images/home/logos/solana.png";
import HederaLogo from "@images/home/logos/hedera.png";
import AlgorandLogo from "@images/home/logos/algorand.png";
import PoligonLogo from "@images/home/logos/poligon.png";
import VercelLogo from "@images/home/logos/vercel.png";

const Partners: FC = ({}) => {
  return (
    <>
      <div className=" bg-cover bg-bottom bg-no-repeat ">
        <div className="cta_wrapper__YNWOe container mx-auto overflow-hidden py-24">
          <div className="mx-auto mb-16 w-11/12 sm:mb-10 md:w-2/3 lg:w-2/3 xl:w-2/3">
            <h6 className="my-16 text-center font-['Inter'] text-3xl font-bold leading-9 text-white lg:text-5xl">
              ¿Con quién trabajamos?
            </h6>
            <p className="text-center text-base font-normal text-gray-200 md:text-lg  lg:text-xl xl:mx-auto xl:w-10/12">
              Nuestro éxito se basa en la confianza de nuestros clientes y la
              calidad de nuestros servicios.
            </p>
          </div>
          <div className="px-15 mx-6 flex flex-wrap rounded-2xl px-4 sm:py-16 md:py-16 lg:py-16 xl:py-16">
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4 lg:w-1/4 xl:w-1/4">
              <div className="-ml-4 -mt-1">
                <Image
                  src={TlachiaLogo}
                  alt="tlachia"
                  width={150}
                  height={150}
                  draggable={false}
                />
              </div>
            </div>
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4  lg:w-1/4 xl:w-1/4">
              <Image
                src={EtherfuseLogo}
                alt="etherfuse"
                width={130}
                height={130}
                draggable={false}
              />
            </div>
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4  lg:w-1/4 xl:w-1/4">
              <Image
                src={EthereumLogo}
                alt="etherfuse"
                width={130}
                height={130}
                draggable={false}
              />
            </div>
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4  lg:w-1/4 xl:w-1/4">
              <Image
                src={SolanaLogo}
                alt="etherfuse"
                width={130}
                height={130}
                draggable={false}
              />
            </div>
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4  lg:w-1/4 xl:w-1/4">
              <Image
                src={HederaLogo}
                alt="etherfuse"
                width={130}
                height={130}
                draggable={false}
              />
            </div>
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4  lg:w-1/4 xl:w-1/4">
              <Image
                src={AlgorandLogo}
                alt="etherfuse"
                width={130}
                height={130}
                draggable={false}
              />
            </div>
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4 lg:w-1/4 xl:w-1/4">
              <Image
                src={PoligonLogo}
                alt="etherfuse"
                width={130}
                height={130}
                draggable={false}
              />
            </div>
            <div className="flex w-6/12 justify-center px-2 py-8 md:w-1/4  lg:w-1/4 xl:w-1/4 ">
              <Image
                src={VercelLogo}
                alt="etherfuse"
                width={130}
                height={130}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Partners;
