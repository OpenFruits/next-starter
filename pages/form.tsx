import type { CustomNextPage } from "next";
import Head from "next/head";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Button } from "src/component/Button";
import { Input } from "src/component/Input";
import { Select } from "src/component/Input/select";
import { FixedLayout } from "src/layout/FixedLayout";

type Inputs = {
  accountName: string;
  userName: string;
  age: number;
  gender: "male" | "female" | "other";
};

const defaultValue: Inputs = {
  accountName: "たくみ",
  userName: "openfruits",
  age: 25,
  gender: "male",
};

const Form: CustomNextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: defaultValue });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Form Page</title>
      </Head>
      <h2>React Hook Form v7</h2>
      <div className="py-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Input
            label="名前"
            {...register("accountName", {
              required: { value: true, message: "入力必須です" },
              maxLength: { value: 64, message: "64文字以下にする必要があります" },
              minLength: { value: 2, message: "2文字以上にする必要があります" },
            })}
            error={errors.accountName?.message}
          />
          <Input
            label="ユーザー名"
            prefix="@"
            {...register("userName", {
              required: { value: true, message: "入力必須です" },
              maxLength: { value: 16, message: "16文字以下にする必要があります" },
              minLength: { value: 4, message: "4文字以上にする必要があります" },
              pattern: { value: /^[A-Za-z0-9_]+$/i, message: "半角英数字と_だけご使用できます" },
            })}
            error={errors.userName?.message}
          />
          <p>{`watch userName: @${watch("userName")}`}</p>
          <Input
            type="number"
            label="年齢"
            {...register("age", {
              required: { value: true, message: "入力必須です" },
              max: { value: 60, message: "利用可能年齢は60歳未満です" },
              min: { value: 0, message: "正しい年齢を入力してください" },
            })}
            error={errors.age?.message}
          />
          <Select type="text" label="性別" {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </Select>
          <Button type="submit" variant="solid-blue" className="p-2 w-full rounded-lg">
            送信
          </Button>
        </form>
      </div>
    </>
  );
};

Form.getLayout = FixedLayout;

export default Form;
