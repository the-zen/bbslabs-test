// Types
import type { NextPage } from "next";

// Utils
import Head from "next/head";

// Components
import AiComponent from '~/components/labs/ai';

const Ai: NextPage = () => {
    return (
        <>
            <Head>
                <title>BBS Labs - AI</title>
                <meta
                    name="description"
                    content="AI business modeling for blockchain projects"
                />
            </Head>


            <AiComponent />
        </>
    )
}

export default Ai