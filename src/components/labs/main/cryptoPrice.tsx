import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

const CryptoPrice: FC = ({}) => {
  const cryptoPrices: {
    name: string;
    protocol: string;
    transactions: string;
    price: string;
    image: string;
  }[] = [
    {
      name: "Bitcoin",
      protocol: "Proof of Work",
      transactions: "1,000",
      price: "47,000",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=013",
    },
    {
      name: "Ethereum",
      protocol: "Proof of Stake",
      transactions: "1,000",
      price: "3,000",
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=013",
    },
    {
      name: "Solana",
      protocol: "Proof of Stake",
      transactions: "1,000",
      price: "200",
      image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=013",
    },
    {
      name: "Hedera Hashgraph",
      protocol: "Proof of Stake",
      transactions: "1,000",
      price: "0.50",
      image:
        "https://cryptologos.cc/logos/hedera-hashgraph-hbar-logo.png?v=013",
    },
  ];

  return (
    <>
      <div className="relative isolate overflow-visible ">
        {/* Background starts */}
        <svg
          className="absolute  inset-0 top-16 -z-10 h-full w-full rotate-180 stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-zinc-700/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
        {/* Background ends */}

        {/* Content starts */}
        <div className="z-10  mx-auto my-12 grid max-w-6xl gap-10  pt-6 sm:mx-8 sm:grid-cols-2 xl:mx-auto xl:grid-cols-4">
          {cryptoPrices.map((crypto, index) => (
            <Link
              href="/labs/crypto-price"
              passHref
              key={`${index}: ${crypto.name}`}
              className="flex flex-col items-center justify-center rounded-lg bg-[#181818] bg-opacity-80 py-8 transition-transform hover:scale-[1.03] hover:bg-[#202020]"
            >
              <Image
                src={crypto.image}
                className="-mt-16 mb-4 "
                width={80}
                height={80}
                draggable={false}
                decoding="async"
                loading="lazy"
                alt="Bitcoin"
              />
              <div className="relative isolate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 800 800"
                  opacity="0.54"
                  className="absolute inset-0 -top-14 -z-10 h-full w-full opacity-20"
                >
                  <defs>
                    <filter
                      id="bbblurry-filter"
                      x="-100%"
                      y="-100%"
                      width="400%"
                      height="400%"
                      filterUnits="objectBoundingBox"
                      primitiveUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feGaussianBlur
                        stdDeviation={93}
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        edgeMode="none"
                        result="blur"
                      />
                    </filter>
                  </defs>
                  <g filter="url(#bbblurry-filter)">
                    <ellipse
                      rx="113.5"
                      ry="103.5"
                      cx="408.6668916872036"
                      cy="400.1533487529655"
                      fill="hsla(0, 0%, 100%, 1.00)"
                    />
                  </g>
                </svg>

                <div className="text-center text-zinc-300">
                  <div className="mb-4">
                    <h5 className="">{crypto.name}</h5>
                    <br />
                    <span className="">{crypto.protocol}</span>
                    <br />
                  </div>

                  <var className="mb-8 ">
                    {crypto.transactions} transactions
                  </var>
                  <br />
                  <var className="text-zinc-50"> $ {crypto.price}</var>
                </div>
              </div>
              <div className="-mb-4 mr-14 mt-10 w-full text-right text-xs text-primary hover:text-primary-hover">
                Leer más →
              </div>
            </Link>
          ))}
        </div>
        {/* Content ends */}
      </div>
    </>
  );
};
export default CryptoPrice;
