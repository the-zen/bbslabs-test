import { useEffect, type FC } from "react";

import Image from "next/image";
import Head from "next/head";
const styles = `.slides-container {
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
}
.slides-container::-webkit-scrollbar {
	display: none; /* Safari and Chrome */
}
`;

const Mint: FC = ({}) => {
  useEffect(() => {
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer?.querySelector(".slide")?.clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (!slidesContainer || !slideWidth || !prevButton || !nextButton) return;

    nextButton?.addEventListener("click", () => {
      slidesContainer.scrollLeft += slideWidth * 2;
    });

    prevButton?.addEventListener("click", () => {
      slidesContainer.scrollLeft -= slideWidth * 2;
    });
  }, []);

  return (
    <>
      <Head>
        <style>{styles}</style>
      </Head>
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            {/* Content starts */}
            <div className="lg:pr-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <div className="mt-8">
                  <button className="relative z-10 inline-flex rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Get started
                  </button>
                </div>
              </div>
            </div>
            {/* Content ends */}

            <div className="">
              {/* Carousel starts */}
              <div className="relative">
                <div className="slides-container flex h-72 snap-x snap-mandatory space-x-2 overflow-hidden overflow-x-auto scroll-smooth rounded before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
                  <div className="slide aspect-square h-full flex-shrink-0 snap-center overflow-hidden rounded">
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600"
                      alt="mountain_image"
                    />
                  </div>
                  <div className="slide aspect-square h-full flex-shrink-0 snap-center overflow-hidden rounded">
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="mountain_image"
                    />
                  </div>
                  <div className="slide aspect-square h-full flex-shrink-0 snap-center overflow-hidden rounded">
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="mountain_image"
                    />
                  </div>
                </div>

                {/* prev button */}
                <div className="absolute -left-4 top-0 hidden h-full items-center md:flex">
                  <button
                    role="button"
                    className="prev group rounded-full bg-neutral-100 px-2 py-2 text-neutral-900"
                    aria-label="prev"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 transition-all duration-200 ease-linear group-active:-translate-x-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                {/* next button */}
                <div className="absolute -right-4 top-0 hidden h-full items-center md:flex">
                  <button
                    role="button"
                    className="next group rounded-full bg-neutral-100 px-2 py-2 text-neutral-900"
                    aria-label="next"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 transition-all duration-200 ease-linear group-active:translate-x-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Carousel ends */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mint;
