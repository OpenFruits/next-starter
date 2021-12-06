import "../src/style/index.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";

const MyApp = (props: CustomAppProps) => {
  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<props.Component {...props.pageProps} />)}
    </>
  );
};

export default MyApp;
