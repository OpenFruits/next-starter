import type { CustomNextPage } from "next";
import Head from "next/head";
import { FluidLayout } from "src/layout/FluidLayout";

const Home: CustomNextPage = () => {
  const handleClick = () => {
    alert("Hello World!");
  };

  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Starter Template by Next.js" />
      </Head>

      <div>
        <h2>Index</h2>
        <button className="p-2" onClick={handleClick}>
          show alert!
        </button>
      </div>
    </div>
  );
};

Home.getLayout = FluidLayout;

export default Home;
