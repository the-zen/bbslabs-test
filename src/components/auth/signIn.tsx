// Types 
import type { FC } from 'react';
import { z } from 'zod';

// Form 
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Auth
import { signIn } from 'next-auth/react';

// Utils
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';


const SignIn: FC = ({ }) => {

  const router = useRouter();

  const formObjectValidation = z.object({
    email: z.string().email({ message: "Email no valido" }),
    password: z.string(),
  });
  type FormObjectValidation = z.infer<typeof formObjectValidation>;

  const { register, handleSubmit, /*formState: { errors }*/ } = useForm<FormObjectValidation>({
    resolver: zodResolver(formObjectValidation),
  });
  const onSubmit: SubmitHandler<FormObjectValidation> = (data) => {
    signIn("credentials", { ...data, redirect: false })
      .then(async (res) => {
        if (res?.status === 401) {
          toast.error('Credenciales incorrectas');
        } else if (res?.status === 200) {
          toast.success('Bienvenido');
          await router.push('/labs');
        } else {
          toast.error('Error desconocido');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };


  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              {...register("email")}
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              {...register("password")}
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm leading-6">
            <a href="#" className="font-semibold text-primary hover:text-primary">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
export default SignIn;