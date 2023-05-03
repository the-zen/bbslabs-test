// Types
import type { FC } from 'react';

// Images
import Image from 'next/image';
import CompleteLogoImage from '@images/home/bbs/complete-logo-white.png';

// Utils
import Link from 'next/link';
import { useRouter } from 'next/router';

const Title: FC = ({ }) => {

    const router = useRouter();

    return (
        <>
            {
                router.pathname === '/auth/login' && (
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 text-white">
                        <Image className="mx-auto" src={CompleteLogoImage} width={200} height={65} alt={''} />
                        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
                            Sign in to your account
                        </h2>
                        <p className="text-center">
                            Don&apos;t have an account? {' '}
                            <Link href="/auth/register" className='text-primary hover:text-primary-hover'>
                                Sign up
                            </Link>
                        </p>
                    </div>
                )
            }

            {
                router.pathname === '/auth/register' && (
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 text-white">
                        <Image className="mx-auto" src={CompleteLogoImage} width={200} height={65} alt={''} />
                        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
                            Register for an account
                        </h2>
                        <p className="text-center">
                            Already have an account? {' '}
                            <Link href="/auth/login" className='text-primary hover:text-primary-hover'>
                                Sign in
                            </Link>
                        </p>
                    </div>
                )
            }

        </>
    );
}
export default Title;