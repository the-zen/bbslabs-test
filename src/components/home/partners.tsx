// Types
import type { FC } from 'react';

// Images
import Image from 'next/image';
import TlachiaLogo from '@images/home/logos/tlachia-logo.png';
import EtherfuseLogo from '@images/home/logos/etherfuse.png';
import EthereumLogo from '@images/home/logos/ethereum.png';
import SolanaLogo from '@images/home/logos/solana.png';
import HederaLogo from '@images/home/logos/hedera.png';
import AlgorandLogo from '@images/home/logos/algorand.png';
import PoligonLogo from '@images/home/logos/poligon.png';
import VercelLogo from '@images/home/logos/vercel.png';



const Partners: FC = ({ }) => {
    return (
        <>
            <div
                className="bg-[url('../assets/labs-waves.svg')] bg-bottom bg-no-repeat bg-cover "
            >
                <div
                    className="container mx-auto py-24 cta_wrapper__YNWOe overflow-hidden"
                >
                    <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                        <h6 className="text-3xl lg:text-5xl font-bold leading-9 text-center font-['Inter'] text-white my-16">
                            ¿Con quién trabajamos?
                        </h6>
                        <p className="text-base md:text-lg lg:text-xl text-center text-gray-200  font-normal xl:w-10/12 xl:mx-auto">
                            Nuestro éxito se basa en la confianza de nuestros clientes y la calidad de nuestros
                            servicios.
                        </p>
                    </div>
                    <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap px-4 mx-6 rounded-2xl">
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center px-2 py-8">
                            <div className="-ml-4 -mt-1">
                                <Image src={TlachiaLogo} alt="tlachia" width={150} height={150} draggable={false} />
                            </div>
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  px-2 py-8">
                            <Image src={EtherfuseLogo} alt="etherfuse" width={130} height={130} draggable={false} layout="fixed"
                            />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  px-2 py-8">
                            <Image src={EthereumLogo} alt="etherfuse" width={130} height={130} draggable={false} />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  px-2 py-8">
                            <Image src={SolanaLogo} alt="etherfuse" width={130} height={130} draggable={false} />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  px-2 py-8">
                            <Image src={HederaLogo} alt="etherfuse" width={130} height={130} draggable={false} />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  px-2 py-8">
                            <Image src={AlgorandLogo} alt="etherfuse" width={130} height={130} draggable={false} />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center px-2 py-8">
                            <Image src={PoligonLogo} alt="etherfuse" width={130} height={130} draggable={false} />
                        </div>
                        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  px-2 py-8 ">
                            <Image src={VercelLogo} alt="etherfuse" width={130} height={130} draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Partners;