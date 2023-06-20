import type { FC } from "react";

import { CheckIcon } from "@heroicons/react/20/solid";

const Pricing: FC = ({}) => {
  const tiers = [
    {
      name: "Hobby",
      id: "tier-hobby",
      href: "#",
      priceMonthly: "$49",
      description:
        "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
    },
    {
      name: "Team",
      id: "tier-team",
      href: "#",
      priceMonthly: "$79",
      description:
        "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
      ],
    },
  ];
  return (
    <>
      <div className="isolate ">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The right price for you,{" "}
              <br className="hidden sm:inline lg:hidden" />
              whoever you are
            </p>
          </div>
          <div className="relative isolate mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              numquam eligendi quos odit doloribus molestiae voluptatum.
            </p>
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
          </div>
        </div>
        <div className="flow-root  pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="z-10 flex flex-col justify-between rounded-3xl bg-zinc-900/70 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                  >
                    <div>
                      <h3
                        id={tier.id}
                        className="text-base font-semibold leading-7 text-primary"
                      >
                        {tier.name}
                      </h3>
                      <div className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-50">
                          {tier.priceMonthly}
                        </span>
                        <span className="text-base font-semibold leading-7 text-zinc-300">
                          /month
                        </span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-zinc-300">
                        {tier.description}
                      </p>
                      <ul
                        role="list"
                        className="mt-10 space-y-4 text-sm leading-6 text-zinc-300"
                      >
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-primary"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className="mt-8 block rounded-md bg-primary px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Get started today
                    </a>
                  </div>
                ))}
                <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-primary">
                      Discounted
                    </h3>
                    <p className="mt-1 text-base leading-7 text-zinc-300">
                      Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                      Odit omnis non voluptatem sunt eos nostrum.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Buy discounted license{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricing;
