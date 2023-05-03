// Types
import type { NextPage } from "next";

// SEO
import Head from "next/head";

// Components
import AuthComponent from "~/components/auth";
import SignUp from "~/components/auth/signUp";

const Register: NextPage = () => {
    return (
        <>
            <Head>
                <title>Blockchain Business School - Register</title>
            </Head>

            <AuthComponent>
                <SignUp />
            </AuthComponent>
        </>
    )
}

export default Register