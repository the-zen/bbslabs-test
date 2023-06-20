// Types
import type { FC } from "react";

// Utils
// import { useState } from "react";
import axios from "axios";

const Form: FC = ({}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      const data = await axios.post("/api/ai/business");
      console.log(data);
    })().catch((err) => console.log(err));
  };

  const prompt = `Actúa como un CONSULTOR ESPECIALIZADO EN DESARROLLO, ESTRATEGIA, INNOVACIÓN E INTELIGENCIA DE NEGOCIOS y crea un 
  BMC que incluya una propuesta de valor con sugerencias de componentes de innovación que marque una diferencia con la competencia, 
  sugiere un MVP para validar la idea, define cuales son los recursos mínimos necesarios para la puesta en marcha del negocio, menciona 
  cuales son los canales de distribución más efectivos según el tipo de negocio, sugiere como en negocio puede integrarse a una transformación 
  digital, de la siguiente idea: 
  “Venta de repostería con impresión personalizada, en la ciudad de Chihuauha, dirigido Empresas, Organizadores de eventos, gente que tenga 
  eventos, publico en general, etc”`;

  return (
    <>
      <div className="mb-12 border-r border-dashed border-white">
        <form className="mx-8" onSubmit={handleSubmit}>
          <div className="mt-24 space-y-12 ">
            <div className="border-b border-white/10 pb-12">
              <h2 className="mx-auto max-w-3xl text-left text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Modela tu negocio con Inteligencia Artificial
              </h2>
              <p className="mx-auto mt-2  text-left text-lg leading-8 text-gray-300">
                Llena el formulario para que podamos ayudarte a modelar tu
                negocio en menos de 1 minuto.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    ¿Cuál es el problema que resuelve tu proyecto?
                  </label>
                  <p className="mb-3 text-sm leading-6 text-gray-300">
                    Describe brevemente el problema que resuelve tu proyecto
                    como si se lo estuvieras explicando a un niño de 5 años.
                  </p>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Listo
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
