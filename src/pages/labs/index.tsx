import type { NextPage } from "next";
import Head from "next/head";

import MainComponent from "~/components/labs/main";

const Index: NextPage = () => {
  return (
    <>
    <Head>
      <title>BBS Labs</title>
    </Head>

    <MainComponent />
    </>
  )
}

export default Index