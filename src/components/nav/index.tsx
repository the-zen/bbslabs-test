// UI
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import {
  BeakerIcon,
  BellIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

// Images
import Image from "next/image";
import Logo from "@images/home/bbs/logo-white.svg";

// Components
import ProfileDropdown from "./profileDropdown";

// Utils
import Link from "next/link";

// Auth
import { useSession } from "next-auth/react";

// Router
import { useRouter } from "next/router";

const solutions = [
  {
    name: "Labs",
    description: "Descubre todas las herramientas que tenemos a disposición",
    href: "/labs",
    icon: BeakerIcon,
  },
  {
    name: "Blockchain",
    description: "Aprende sobre la tecnología que está revolucionando el mundo",
    href: "#",
    icon: CubeTransparentIcon,
  },
  {
    name: "Acerca de nosotros",
    description: "Conócenos y descubre por qué somos la mejor opción para ti",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Blog",
    description:
      "Lee nuestros artículos y mantente al día con las últimas noticias",
    href: "#",
    icon: NewspaperIcon,
  },
];
const callsToAction = [
  { name: "Mira nuestra intro", href: "#", icon: PlayCircleIcon },
  { name: "Contactanos", href: "#", icon: PhoneIcon },
  { name: "Nuestros proyectos", href: "#", icon: RectangleGroupIcon },
];

const Index = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <Popover className="fixed isolate z-50 w-full bg-black bg-opacity-50 shadow-2xl">
      <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex">
          <Link href="/" passHref className="flex flex-shrink-0 items-center">
            <Image
              src={Logo as string}
              alt="Blockchain Business School"
              loading="lazy"
              draggable={false}
              className="block h-8 w-auto"
            />
          </Link>
        </div>

        {/* Center */}
        <div className="flex items-center space-x-4 text-sm font-semibold leading-6 text-gray-200 hover:text-white">
          <Popover.Button className="inline-flex items-center gap-x-1">
            Productos
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>
          <Link href="/events" target="_blank">
            Eventos
          </Link>
        </div>

        {/* Right */}
        {session.status == "authenticated" ? (
          <div className="flex">
            <div className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <ProfileDropdown />
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-200 hover:text-white"
            >
              Login <ArrowLongRightIcon className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-black bg-opacity-80 pt-16 shadow-lg ring-1 ring-gray-900/5">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 shadow-2xl sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
            {solutions.map((item) => (
              <Popover.Button
                key={item.name}
                onClick={() => {
                  router.push(item.href).catch((err) => console.log(err));
                }}
                className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-left text-sm leading-6 transition-colors duration-200 hover:bg-gray-50 hover:bg-opacity-10 sm:flex-col sm:p-6"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 bg-opacity-20">
                  <item.icon
                    className="h-6 w-6 text-primary group-hover:text-primary-hover"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-50">
                    {item.name}
                    <span className="absolute inset-0" />
                  </div>
                  <p className="mt-1 text-gray-300">{item.description}</p>
                </div>
              </Popover.Button>
            ))}
          </div>
          <div className=" border-b border-gray-400">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-x-2.5 rounded-md p-3 px-6 text-sm font-semibold leading-6 text-gray-300 transition-colors duration-200 hover:text-white sm:justify-center sm:px-0"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Index;
