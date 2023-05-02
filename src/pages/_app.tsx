import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import { Toaster } from "react-hot-toast";

// Styles
import '~/styles/globals.css'
import '~/styles/home.css'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster
        toastOptions={{
          style: {
            background: '#1c1c1c',
            color: '#fff',

          },
        }} />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
