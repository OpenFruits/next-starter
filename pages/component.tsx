import type { CustomNextPage } from "next";
import Head from "next/head";
import type { VFC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Button } from "src/component/Button";
import type { ButtonVariant } from "src/component/Button/type";
import { Button2 as Btn2 } from "src/component/Button2";
import { Input } from "src/component/Input";
import { Select } from "src/component/Input/select";
import { FixedLayout } from "src/layout/FixedLayout";

const BtnClass = "p-2 rounded";
const Btn2Class = `${BtnClass} bg-amber-300 hover:bg-amber-500`;

const Btn: VFC<{ variant: ButtonVariant }> = (props) => {
  return (
    <Button variant={props.variant} className={BtnClass}>
      {props.variant}
    </Button>
  );
};

type Input = {
  example: string;
  select: "foo" | "bar" | "baz";
};

const Component: CustomNextPage = () => {
  const { register, handleSubmit } = useForm<Input>({});
  const onSubmit: SubmitHandler<Input> = (data) => alert(data.example);

  return (
    <>
      <Head>
        <title>Component Page</title>
      </Head>

      <div>
        <h2>Component Collection</h2>

        <h3>Button</h3>
        <div className="flex space-x-2">
          <Btn variant="solid-blue" />
          <Btn variant="solid-red" />
          <Btn variant="solid-gray" />
          <Btn variant="solid-white" />
          <Btn variant="solid-black" />
          <Btn variant="outline" />
          <Btn variant="ghost" />
        </div>

        <h3>Button2</h3>
        <form className="flex space-x-2">
          <Btn2 tag="button" className={Btn2Class}>
            button
          </Btn2>
          <Btn2 tag="a" linkProps={{ href: "/" }} className={Btn2Class}>
            anchor
          </Btn2>
          <Btn2 tag="input" type="submit" value="submit" className={Btn2Class} />
        </form>

        <h3>Input</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2">
          <Input defaultValue="example" {...register("example")} />
          <Select defaultValue="foo" {...register("select")} className="w-24">
            <option value="foo">foo</option>
            <option value="bar">bar</option>
            <option value="baz">baz</option>
          </Select>
          <Btn2 tag="input" type="submit" value="submit" className={Btn2Class} />
        </form>
      </div>
    </>
  );
};

Component.getLayout = FixedLayout;

export default Component;
