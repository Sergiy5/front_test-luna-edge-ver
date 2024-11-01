"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { CustomBtn, CustomInput } from "../ui";
import { ErrorMessage } from "../ui/ErrorMessage";
import { userCredentialsSignal } from "@/app/context/Context";
import { TextWithLink } from "../ui/TextWithLink";

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export const Register: React.FC = () => {
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
    const { email, name, password } = data;
    userCredentialsSignal.value = { name, email, password };
    setIsSubmitted(true);
    router.push("/account-setup/connect-store");
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
            defaultValue={userCredentialsSignal.value.email}
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
            id="name"
            autofocus
            defaultValue={userCredentialsSignal.value.name}
            label="Your name"
            placeholder="Mega Chad"
            autocomplete="on"
            type="text"
            isSubmitted={isSubmitted}
            register={register}
            validation={{ required: true }}
            errors={errors}
          />
          {errors.name && <ErrorMessage />}
        </div>
        <div className="relative">
          <CustomInput
            label="Password"
            defaultValue={userCredentialsSignal.value.password}
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
          Create account
        </CustomBtn>
      </form>
      <TextWithLink
        text="Already have an account?"
        link="/account-setup/login"
        linkText="Login"
        className="mt-4"
      />
    </div>
  );
};
