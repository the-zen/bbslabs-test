// Types
import type { FC } from "react";

// Components
import Prompt from "./prompt";
import Response from "./response";

const index: FC = ({}) => {
  return (
    <>
      <main className="flex h-full w-full justify-between">
        {/* left */}
        <div className="w-1/2 bg-[url('../assets/topography.svg')] bg-cover">
          <Prompt />
        </div>

        {/* right */}
        <div className="w-1/2 bg-[url('../assets/topography.svg')]  bg-cover">
          <Response />
        </div>
      </main>
    </>
  );
};
export default index;
