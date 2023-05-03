// Types
import type { FC } from "react";

// Components
import OAuth from "./oAuth";
import Title from "./title";

interface AuthProps {
    children?: React.ReactNode;
}

const AuthComponent: FC<AuthProps> = ({
    children
}) => {
    return (
        <>
            <div className="flex overflow-x-hidden h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-no-repeat bg-[url('../assets/auth-bg.svg')]">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-zinc-900 bg-opacity-30 px-6 py-12 shadow-2xl sm:rounded-lg sm:px-12">
                        <Title />
                        {children} {/* Credentials */}
                        <OAuth />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthComponent;
