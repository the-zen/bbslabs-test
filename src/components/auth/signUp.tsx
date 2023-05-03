// Types
import type { FC } from 'react';
import { z } from 'zod';

// Form 
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Utils
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

// Api
import { api } from "@utils/api";


const SignUp: FC = ({ }) => {

  const router = useRouter();

  const formObjectValidation = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
      .regex(new RegExp(".*[A-Z].*"), "Debe contener una mayúscula")
      .regex(new RegExp(".*[a-z].*"), "Debe contener una minúscula")
      .regex(new RegExp(".*\\d.*"), "Debe contener un numero")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "Debe contener un carácter especial"
      )
      .min(8, "Debe ser de al menos 8 caracteres"),
    password_confirmation: z.string(),
    TyC: z.boolean(),
  }).refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
  });



  type FormObjectValidation = z.infer<typeof formObjectValidation>;

  const createUserMutation = api.useCustomAuth.signUp.useMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<FormObjectValidation>({
    resolver: zodResolver(formObjectValidation),
  });
  const onSubmit: SubmitHandler<FormObjectValidation> = (data) => {
    createUserMutation.mutateAsync({
      name: data.name,
      email: data.email,
      password: data.password,
      TyC: data.TyC,
    }).then(async () => {
      await router.push("/auth/login");
    })
      .catch((err) => {
        console.log(err);
      })
  };

  if (errors.email?.message) toast.error("Email no valido");
  if (errors.password?.message) toast.error(`${errors.password?.message}`);
  if (errors.password_confirmation?.message) toast.error("Las contraseñas no coinciden");


  return (
    <>
      <>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="space-y-2 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                {...register("name")}
                type="name"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-black pl-1 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                {...register("email")}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-black pl-1 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-1.5 text-black pl-1 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-white">
              Confirm password
            </label>
            <div className="mt-2">
              <input
                id="password_confirmation"
                {...register("password_confirmation")}
                type="password_confirmation"
                required
                className="block w-full rounded-md border-0 py-1.5 text-black pl-1 shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="TyC"
                {...register("TyC")}
                type="checkbox"
                required
                className="h-4 w-4 rounded border-white text-primary focus:ring-primary"
              />
              <label htmlFor="TyC" className="ml-3 block text-sm leading-6 text-white">
                Términos y Condiciones
              </label>
            </div>

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
    </>
  );
}
export default SignUp;