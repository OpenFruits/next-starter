import "../src/style/index.css";
import type { CustomAppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: CustomAppProps) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default MyApp;
