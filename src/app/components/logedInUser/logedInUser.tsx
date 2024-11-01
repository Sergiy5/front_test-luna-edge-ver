"use client";

import { userCredentialsSignal } from "@/app/context/Context";
import { useRouter } from "next/navigation";
import { InfoStep } from "../infoStep/InfoStep";
import { CustomBtn } from "../ui";

export const LogedInUser: React.FC = () => {
  const router = useRouter();
  if (userCredentialsSignal.value.name.length === 0) {
    router.replace("/account-setup");
  }
  const hanldeRote = () => {
  router.push("/account-setup");
}

  return (
    <div className="flex items-center flex-col gap-6 w-full h-32  ">
      <InfoStep
        text={`Hello Luna Edge, My name is ${userCredentialsSignal.value.name}.`}
        title="Welcome"
      />
      <CustomBtn onClick={hanldeRote}>Register</CustomBtn>
    </div>
  );
};
