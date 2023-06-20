import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

// Utils
import { Toaster } from "react-hot-toast";

// Components
import Navbar from "~/components/nav";

// Styles
import "~/styles/globals.css";
import "~/styles/home.css";
import Footer from "~/components/footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster
        toastOptions={{
          style: {
            background: "#1c1c1c",
            color: "#fff",
          },
        }}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
