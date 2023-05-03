
// Types
import type { FC } from 'react';

// Auth
import { signIn, signOut } from 'next-auth/react';

const oAuth: FC = ({ }) => {
    return (
        <>
            <div>
                <div className="relative mt-10">
                    <div className="inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-white" />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button
                        className="flex w-full items-center justify-center gap-3 rounded-md bg-zinc-900 hover:bg-zinc-800 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        onClick={() => {
                            signIn('google')
                              .catch((error) => {
                                console.log(error)
                              })
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                        </svg>
                        <span className="text-sm font-semibold leading-6">Google</span>
                    </button>
                    <button
                        className="flex w-full items-center justify-center gap-3 rounded-md bg-zinc-900 hover:bg-zinc-800 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        onClick={() => {
                            // signOut()
                            // .catch((error) => {
                            //     console.log(error)
                            // })
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                        <span className="text-sm font-semibold leading-6">GitHub</span>
                    </button>
                </div>
            </div>
        </>
    );
}
export default oAuth;