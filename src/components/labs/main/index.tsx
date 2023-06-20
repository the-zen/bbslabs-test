// Animations
import { motion } from "framer-motion";

// Components
import Hero from "./hero";
import AiSection from "./aiSection";
import CryptoPrice from "./cryptoPrice";
import Mint from "./mint";
import Pricing from "./pricing";

// Auth
import { useSession } from "next-auth/react";

const Index = () => {
  const components = [
    { id: "hero", component: <Hero /> },
    { id: "aiSection", component: <AiSection /> },
    { id: "cryptoPrices", component: <CryptoPrice /> },
    { id: "mint", component: <Mint /> },
    { id: "pricing", component: <Pricing /> },
  ];

  const session = useSession();
  console.log("🚀 ~ file: index.tsx:16 ~ Index ~ session:", session);

  return (
    <>
      {components.map((component, index) => {
        return (
          <motion.section
            key={index}
            id={component.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 10 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {component.component}
          </motion.section>
        );
      })}
    </>
  );
};

export default Index;
