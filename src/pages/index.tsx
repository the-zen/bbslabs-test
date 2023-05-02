// Types
import { type NextPage } from "next";

// SEO
import Head from "next/head";

// Components
import HomeComponent from '~/components/home'


const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Blockchain Business School</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Empresa dedicada a la incubación y aceleración de proyectos basados en blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HomeComponent />
    </>
  );
};

export default Home;