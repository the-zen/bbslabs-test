// UI
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import { BeakerIcon, BellIcon, BookOpenIcon, CubeTransparentIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

// Images
import Image from 'next/image';
import Logo from '@images/home/bbs/logo-white.svg';

// Components
import ProfileDropdown from './profileDropdown'

// Utils
import Link from 'next/link';

// Auth
import { useSession } from 'next-auth/react';


const solutions = [
    {
        name: 'Labs',
        description: 'Descubre todas las herramientas que tenemos a disposición',
        href: '/labs',
        icon: BeakerIcon,
    },
    {
        name: 'Blockchain',
        description: 'Aprende sobre la tecnología que está revolucionando el mundo',
        href: '#',
        icon: CubeTransparentIcon,
    },
    {
        name: 'Acerca de nosotros',
        description: "Conócenos y descubre por qué somos la mejor opción para ti",
        href: '#',
        icon: BookOpenIcon,
    },
    {
        name: 'Blog',
        description: "Lee nuestros artículos y mantente al día con las últimas noticias",
        href: '#',
        icon: NewspaperIcon,
    },
]
const callsToAction = [
    { name: 'Mira nuestra intro', href: '#', icon: PlayCircleIcon },
    { name: 'Contactanos', href: '#', icon: PhoneIcon },
    { name: 'Nuestros proyectos', href: '#', icon: RectangleGroupIcon },
]



const Index = () => {

    const session = useSession();


    return (
        <Popover className="fixed bg-black bg-opacity-50 w-full isolate z-50 shadow-2xl">
            <div className="py-5 max-w-7xl mx-auto w-full flex justify-between px-4 sm:px-6 lg:px-8">
                {/* Left */}
                <div className="flex">
                    <Link
                        href='/'
                        passHref
                        className="flex flex-shrink-0 items-center"
                    >
                        <Image
                            className="block h-8 w-auto"
                            src={Logo as string}
                            alt="Blockchain Business School"
                        />
                    </Link>
                </div>

                {/* Center */}
                <div className='flex items-center space-x-4 text-gray-200 hover:text-white text-sm font-semibold leading-6'>
                    <Popover.Button className="inline-flex items-center gap-x-1">
                        Productos
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </Popover.Button>
                    <Link
                        href='/events'
                        target='_blank'
                    >
                        Eventos
                    </Link>
                </div>

                {/* Right */}
                {
                    session.status == 'authenticated' ? (
                        <div className="flex">
                            <button
                                type="button"
                                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <ProfileDropdown />
                        </div>
                    ) : (
                        <div className='flex items-center'>
                            <Link href='/auth/login'
                                className='flex items-center gap-2 text-gray-200 hover:text-white text-sm font-semibold leading-6'
                            >
                                Login <ArrowLongRightIcon className='h-4 w-4' />
                            </Link>
                        </div>
                    )
                }

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
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8 shadow-2xl">
                        {solutions.map((item) => (
                            <div
                                key={item.name}
                                className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 hover:bg-opacity-10 sm:flex-col sm:p-6 transition-colors duration-200"
                            >
                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 bg-opacity-20">
                                    <item.icon className="h-6 w-6 text-primary group-hover:text-primary-hover" aria-hidden="true" />
                                </div>
                                <div>
                                    <Link href={item.href} className="font-semibold text-gray-50">
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </Link>
                                    <p className="mt-1 text-gray-300">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" border-b border-gray-400">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                                {callsToAction.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex rounded-md items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-300 hover:text-white sm:justify-center sm:px-0 transition-colors duration-200"
                                    >
                                        <item.icon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Index
