// Type
import type { FC } from "react";

// Utils
import Link from "next/link";

const index: FC = ({}) => {
  return (
    <>
      <div className="flex h-full w-screen items-center justify-between overflow-hidden border-t border-zinc-400 bg-[#111111] px-8 text-white">
        <div className="my-3 text-left">
          <Link
            href="#"
            className="border-r border-gray-200 pr-1 text-sm hover:text-gray-200 md:pr-2"
          >
            Políticas y privacidad
          </Link>
          <Link
            href="#"
            className="border-r border-gray-200 pl-1 pr-1 text-sm hover:text-gray-200 md:pl-2 md:pr-2"
          >
            Términos y condiciones
          </Link>
          <Link href="#" className="pl-1 text-sm hover:text-gray-200 md:pl-2">
            Ayuda
          </Link>
        </div>
      </div>
    </>
  );
};
export default index;
