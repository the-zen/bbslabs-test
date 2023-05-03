// Types
import type { NextPage } from "next";

// SEO
import Head from "next/head";

// Components
import AuthComponent from "~/components/auth";
import SignIn from "~/components/auth/signIn";


const Register: NextPage = () => {

  return (
    <>
      <Head>
        <title>Blockchain Business School - Login</title>
      </Head>

      <AuthComponent>
        <SignIn />
      </AuthComponent>
    </>
  )
}

export default Register