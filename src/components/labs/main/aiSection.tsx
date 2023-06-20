// Types
import type { FC } from "react";

// Images
import Image from "next/image";
import MockupImage from "@images/labs/ai-mockup.png";

const aiSection: FC = ({}) => {
  return (
    <>
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fff] to-[#222222] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="relative  isolate overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex w-full items-center justify-center space-x-8">
              <div className="lg:pr-4 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-primary-hover">
                    AI
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                    Modelado de negocios
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-200">
                    En este laboratorio se utiliza inteligencia artificial para
                    modelar tu negocio y encontrar oportunidades de mercado.
                    Empieza a utilizarlo para expandir y escalar tu negocio.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-primary px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:border-primary-hover hover:text-gray-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Comienza ahora
                    </a>
                  </div>
                  <div className="mt-6 flex text-white">
                    <div className="border-r border-zinc-100 pr-8">
                      <h5 className="text-3xl font-bold">100+</h5>
                      <p>Proyectos incubados</p>
                    </div>
                    <div className="ml-8">
                      <h5 className="text-3xl font-bold">50+</h5>
                      <p>Compañías ayudadas</p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={MockupImage}
                alt="Product screenshot"
                loading="lazy"
                draggable={false}
                className="hidden w-[38rem] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 md:-ml-4 lg:ml-0 lg:block"
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default aiSection;
