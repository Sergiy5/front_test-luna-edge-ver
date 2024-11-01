"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CustomBtn, CustomInput } from "../ui";
import { ErrorMessage } from "../ui/ErrorMessage";
import { logedInSignal } from "@/app/context/Context";
import { TextWithLink } from "../ui/TextWithLink";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    mode: "onChange",
  });

  const router = useRouter();

  const onSubmit = async (data: IRegisterUser) => {
    const { email, password } = data;
    console.log("email, password", email, password);
    logedInSignal.value = { email, password };
    setIsSubmitted(true);
    router.push("/account-setup/login/success");
  };

  return (
    <div className={`flex flex-col h-full justify-between`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col rounded-lg gap-12 w-full"
      >
        <div>
          <CustomInput
            id="email"
            autofocus
            label="Email"
            placeholder="megachad@trychad.com"
            autocomplete="on"
            type="text"
            isSubmitted={isSubmitted}
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {errors.email && <ErrorMessage />}
        </div>

        <div className="relative">
          <CustomInput
            label="Password"
            placeholder="Enter password"
            id="password"
            autocomplete="on"
            type="password"
            isSubmitted={isSubmitted}
            register={register}
            validation={{ required: true }}
            errors={errors}
          />

          {errors.password && <ErrorMessage />}
        </div>

        <CustomBtn
          type="submit"
          onClick={() => setIsSubmitted(true)}
          primary
          className={`w-[364px]`}
        >
          Login
        </CustomBtn>
      </form>
      <TextWithLink
        text="Don’t have an account? "
        link="/"
        linkText="Join the waitlist"
        className="mt-4"
      />
    </div>
  );
};
