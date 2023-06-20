// Types
import type { FC } from "react";

// Components
import Hero from "./hero";
import About from "./about";
import Map from "./map";
import Newsletter from "./newsletter";
import PrimaryGrid from "./primaryGrid";
// import Labs from "./labs";
import SecondaryGrid from "./secondaryGrid";
// import Partners from "./partners";
import Footer from "~/components/contact";

// Animations
import { motion } from "framer-motion";

const Home: FC = () => {
  const ComponentsArray = [
    { name: "hero", component: <Hero /> },
    { name: "about", component: <About /> },
    { name: "map", component: <Map /> },
    { name: "newsletter", component: <Newsletter /> },
    { name: "primary_grid", component: <PrimaryGrid /> },
    // { name: "labs", component: <Labs /> },
    { name: "secondary_grid", component: <SecondaryGrid /> },
    // { name: 'partners', component: <Partners /> },
    { name: "footer", component: <Footer /> },
  ];

  return (
    <>
      {ComponentsArray.map((component, index) => {
        return (
          <motion.section
            key={index}
            id={component.name}
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
export default Home;
