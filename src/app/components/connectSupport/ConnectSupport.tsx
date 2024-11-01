"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
// import { conectedStore } from "@/app/context/Context";

export const ConnectSupport: React.FC = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/account-setup/connect-support/connect-support-success");
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <ul className="flex flex-col rounded-md gap-4 bg-bgConnect xl:bg-transparent p-4 xl:p-0 ">
        <li className="flex flex-row gap-3">
          <FaCheck className="text-successColor w-4 mt-1" />
          <div className="flex flex-col gap-1">
            <h2>Contextual responses</h2>
            <p>
              Custom responses to any support situation from “where’s my stuff?”
              to “I want a refund”
            </p>
          </div>
        </li>
        <li className="flex flex-row gap-3">
          <FaCheck className="text-successColor w-4 mt-1" />
          <div className="flex flex-col gap-1">
            <h2>Reply from anywhere</h2>
            <p>
              Respond to your customers via email or Chad chat—it’s all saved in
              the same thread
            </p>
          </div>
        </li>
        <li className="flex flex-row gap-3">
          <FaCheck className="text-successColor w-5 mt-1" />
          <div className="flex flex-col gap-1">
            <h2>Categorical inbox tags</h2>
            <p>
              Tags your emails by category so you know what to expect before
              even opening an email
            </p>
          </div>
        </li>
      </ul>
      <button
        type="button"
        onClick={handleRoute}
        className="flex flex-row items-center border rounded-sm border-googleColor h-[50px] w-full"
      >
        <span className="flex items-center justify-center size-12">
          <FcGoogle className="size-[18px]" />
        </span>
        <span className="flex items-center justify-center font-medium text-[14px] leading-[150%] tracking-[-0.001em] bg-googleColor text-sm text-bgContent w-full h-full">
          Connect Gmail account
        </span>
      </button>

      <Link href="/account-setup/connect-support/select-email" className={``}>
        <p>I don’t use Gmail</p>
      </Link>
    </div>
  );
};
