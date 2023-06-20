// Types
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";

// Images
import Image from "next/image";
import LabsLogoImage from "@images/labs/logo.png";

import LabsImage from "@images/labs/ai-labs.png";
import EnvironmentImage from "@images/labs/ai-environment.png";
import IndustryImage from "@images/labs/labs-industry.png";

// UI
import {
  LifebuoyIcon,
  NewspaperIcon,
  BeakerIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const cards = [
  {
    name: "AI Business Modeling",
    description:
      " Crea tu modelo de negocio basado en inteligencia artificial y blockchain.",
    icon: BeakerIcon,
    href: "/labs/ai",
  },
  {
    name: "Smart Business Suite",
    description:
      "Una suite de herramientas para la gestión de tu negocio basado en blockchain.",
    icon: LifebuoyIcon,
    href: "/labs/suite",
  },
  {
    name: "Launchpad Vesting",
    description:
      "Lanza tu proyecto de forma segura y con el respaldo de una comunidad de inversores.",
    icon: NewspaperIcon,
    href: "/labs/launchpad",
  },
];

const Hero: FC = ({}) => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#3b3b3b] to-[#222222] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-0">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <Image
                    src={LabsLogoImage}
                    alt="AI Labs"
                    width={150}
                    height={150}
                    loading="lazy"
                    draggable={false}
                    className="mb-2"
                  />
                  {/* <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
                    AI Labs
                  </h1> */}
                  <p className="relative mt-4 text-lg leading-8 text-gray-200 sm:max-w-md lg:max-w-none">
                    Desarrollo de soluciones basadas en blockchain e
                    inteligencia Artificial para la transformación digital de
                    las empresas. Nuestro equipo multidisciplinario de expertos
                    en tecnología, diseño y negocios, desarrolla soluciones
                    innovadoras para resolver problemas reales de la industria.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-full text-sm font-semibold text-white shadow-sm hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <ArrowDownCircleIcon className="h-10 w-10" />
                    </a>
                  </div>
                </div>
                <div className="mx-auto flex justify-center  gap-16">
                  <div className=" flex w-44 items-center justify-center space-y-8 pt-24 sm:ml-0 lg:pt-36 ">
                    <div className=" flex w-full justify-center">
                      <Image
                        src={LabsImage}
                        alt="AI Labs"
                        loading="lazy"
                        draggable={false}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className=" flex w-44 flex-col space-y-8 sm:mr-0 sm:pt-0 lg:pt-36">
                    <div className="relative">
                      <Image
                        src={EnvironmentImage}
                        alt="Virtual environment development"
                        loading="lazy"
                        draggable={false}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={IndustryImage}
                        alt="Industry development"
                        loading="lazy"
                        draggable={false}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Centro de herramientas
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Utiliza nuestras herramientas para mejorar tu negocio.
              </p>
            </div>
            <div className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {cards.map((card) => (
                <Link
                  key={card.name}
                  href={card.href}
                  className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 hover:bg-white/10"
                >
                  <card.icon
                    className="h-7 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  <div className="text-base leading-7">
                    <h3 className="font-semibold text-white">{card.name}</h3>
                    <p className="mt-2 text-gray-300">{card.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
