import type { CustomNextPage } from "next";
import Head from "next/head";
import { FixedLayout } from "src/layout/FixedLayout";

const Form: CustomNextPage = () => {
  return (
    <>
      <Head>
        <title>Form Page</title>
      </Head>
    </>
  );
};

Form.getLayout = FixedLayout;

export default Form;
