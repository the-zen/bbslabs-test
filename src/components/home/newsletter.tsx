// Types
import { type FC, useRef } from 'react';

// Animations
import { motion } from 'framer-motion';

// Icons
import { ArrowRightIcon } from '@heroicons/react/24/solid';

// Utils
import toast from 'react-hot-toast';

// Server
import { api } from '~/utils/api';

const Newsletter: FC = ({ }) => {

    const ref = useRef<HTMLFormElement>(null);

    const newsletterSubscription = api.newsletter.subscribe.useMutation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!ref.current) return;
        const formData = new FormData(ref.current);

        const email = formData.get('email') as string;

        toast.promise(newsletterSubscription.mutateAsync({ email }), {
            loading: 'Enviando...',
            success: 'Te has suscrito correctamente',
            error: 'Ocurrió un error al suscribirte, intenta nuevamente'
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            ref.current?.reset();
        })

        if(newsletterSubscription.error?.message == 'Email already subscribed') {
            toast.error('Este email ya se encuentra suscrito')
        }
        
    }


    return (
        <>
            <div className="geist-wrapper my-24">
                <div className="cta_wrapper__YNWOe mx-auto my-16">
                    {/* Text */}
                    <div className="mx-auto mt-8 md:my-6">
                        <p className="text-gray-100 text-xl font-medium mb-4">
                            Descubre las ultimas novedades acerca del ecosistema web 3.
                        </p>
                        <span className="text-gray-300">
                            Ingresa tu <b className="text-gray-100">email</b> y sigue conociendo{' '}
                            <b className="text-gray-100">blockchain</b>
                        </span>
                    </div>
                    {/* Input */}
                    <div className="flex justify-center mx-auto mb-8 lg:my-auto">
                        <form ref={ref} className="flex flex-row justify-center" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email here ..."
                                className="bg-black text-gray-300 py-2 px-4 w-56 md:w-96 rounded-l-3xl border-t border-l border-b border-r-0 border-zinc-400 focus:outline-none focus:ring-0 focus:border-gray-400"
                            />
                            <button className="bg-black px-4 border-t border-r border-b border-l-0 border-zinc-400 text-white rounded-r-3xl">
                                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                                    <ArrowRightIcon className="w-6 h-6 ml-2" />{' '}
                                </motion.div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Newsletter;