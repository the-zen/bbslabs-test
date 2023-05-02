// Types
import type { FC } from 'react';
import LeftItems from './leftItems';
import ContactForm from './form'


const index: FC = ({ }) => {
    return (
        <>
            <div className=" flex flex-col bg-[#ffffff13] items-center justify-center pt-24 w-full">
                {/* Mobile form */}
                <div className="mb-24 lg:hidden mx-auto container">
                    <ContactForm />
                </div>

                <div className="flex justify-around gap-14 w-3/4 pt-2">
                    <LeftItems />
                    {/* Desktop form */}
                    <div className=" lg:block hidden">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}
export default index;