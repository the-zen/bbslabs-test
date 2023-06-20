// Types
import type { FC } from "react";

// Components
import OAuth from "./oAuth";
import Title from "./title";

interface AuthProps {
  children?: React.ReactNode;
}

const AuthComponent: FC<AuthProps> = ({ children }) => {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center overflow-x-hidden bg-[url('../assets/auth-bg.svg')] bg-cover bg-no-repeat py-12 sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="h-screen bg-zinc-900 bg-opacity-30 px-6 py-24 shadow-2xl sm:h-full sm:rounded-lg sm:px-12 md:py-12">
            <Title />
            {children} {/* Credentials */}
            <OAuth />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthComponent;
