// Types 
import { type FC, useRef } from 'react';

// Animations
import { motion } from 'framer-motion';

// Server
import { api } from '~/utils/api';
import toast from 'react-hot-toast';




const FormComponent: FC = ({ }) => {

    const uploadContactInfo = api.contact.upload.useMutation();

    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!ref.current) return;
        const formData = new FormData(ref.current);

        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            message: formData.get('message') as string,
            TyC: formData.get('TyC') as string == 'on' ? true : false
        }

        toast.promise(uploadContactInfo.mutateAsync(data), {
            loading: 'Enviando...',
            success: 'Tu mensaje ha sido enviado correctamente',
            error: 'Ocurrió un error al enviar tu mensaje, intenta nuevamente'
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            ref.current?.reset();
        })
    }

    return (
        <>
            <div className="flex mx-auto justify-center rounded-2xl md:-mt-16">
                <div className="flex justify-center text-center flex-col shadow-inner w-96 bg-[url('../assets/contact-waves.svg')] bg-cover bg-center rounded-2xl pb-6">
                    <div className="mx-2 my-2 rounded-2xl shadow-2xl">
                        <h6 className=" xl:text-3xl md:text-2xl text-xl text-center text-white font-bold my-4">
                            Contáctanos
                        </h6>
                        <form ref={ref} onSubmit={handleSubmit}>
                            <div className="px-4">
                                <div className="mb-3 mt-4 pt-0">
                                    <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        name="name"
                                        className="px-3 py-3 w-full placeholder-gray-200 bg-[#00000052] text-gray-100 relative rounded-lg text-sm border border-zinc-300 shadow-md outline-none focus:outline-none focus:border-zinc-700 focus:ring-0 focus:ring-[#ce8a0d]"
                                        required
                                    />
                                </div>
                                <div className="mb-3 pt-0">
                                    <input
                                        type="email"
                                        placeholder="Tu email"
                                        name="email"
                                        className="px-3 py-3 w-full placeholder-gray-200 bg-[#00000052] text-gray-100 relative rounded-lg text-sm border border-zinc-300 shadow-md outline-none focus:outline-none focus:border-zinc-700 focus:ring-0 focus:ring-[#ce8a0d]"
                                        required
                                    />
                                </div>
                                <div className="mb-3 pt-0">
                                    <input
                                        type="tel"
                                        placeholder="Tu teléfono"
                                        name="phone"
                                        className="px-3 py-3 w-full placeholder-gray-200 bg-[#00000052] text-gray-100 relative rounded-lg text-sm border border-zinc-300 shadow-md outline-none focus:outline-none focus:border-zinc-700 focus:ring-0 focus:ring-[#ce8a0d]"
                                        required
                                    />
                                </div>
                                <div className="mb-3 pt-0">
                                    <textarea
                                        placeholder="Mensaje..."
                                        name="message"
                                        className="px-3 py-3 w-full placeholder-gray-200 bg-[#00000052] text-gray-100 relative rounded-lg text-sm border border-zinc-300 shadow-md outline-none focus:outline-none focus:border-zinc-700 focus:ring-0 focus:ring-[#ce8a0d]"
                                        required
                                    />
                                </div>
                                <div className="mb-3 pt-0 flex">
                                    <input
                                        type="checkbox"
                                        name="TyC"
                                        className="my-auto mr-4 rounded shadow-lg h-4 w-4 border-0-gray-300 text-[#ffa600] focus:ring-0 "
                                        required
                                    />
                                    <p className="text-sm text-gray-300">Acepto los términos y condiciones</p>
                                </div>
                            </div>
                            <div className="mb-8 pt-0 flex justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative shadow-md flex text-xs sm:text-md font-semibold px-6 mx-1 py-2 sm:px-8 sm:py-3 bg-[#ffa600] rounded-3xl mr-5 hover:bg-[#ce8a0d] text-white cursor-pointer transition-colors duration-200"
                                >
                                    Enviar
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FormComponent;