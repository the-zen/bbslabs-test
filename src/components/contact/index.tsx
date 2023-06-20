// Types
import type { FC } from "react";
import LeftItems from "./leftItems";
import ContactForm from "./form";

const index: FC = ({}) => {
  return (
    <>
      <div className="relative isolate mt-12 flex w-full flex-col items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fff] to-[#222222] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/* Mobile form */}
        <div className="container mx-auto mb-24 lg:hidden">
          <ContactForm />
        </div>

        <div className="flex w-3/4 justify-around gap-14 pt-2">
          <LeftItems />
          {/* Desktop form */}
          <div className=" hidden lg:block">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
