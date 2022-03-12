import type { CustomNextPage } from "next";
import Head from "next/head";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FixedLayout } from "src/layout/FixedLayout";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Form: CustomNextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(data);

  // eslint-disable-next-line no-console
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <Head>
        <title>Form Page</title>
      </Head>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

Form.getLayout = FixedLayout;

export default Form;
