import type { CustomNextPage } from "next";
import Head from "next/head";
import { FixedLayout } from "src/layout/FixedLayout";

const About: CustomNextPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Starter Template by Next.js" />
      </Head>

      <div>
        <h2>About</h2>
      </div>
    </div>
  );
};

About.getLayout = FixedLayout;

export default About;
