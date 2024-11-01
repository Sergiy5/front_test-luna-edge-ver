"use client";

import { FaCheck } from "react-icons/fa6";
import { CustomBtn } from "../ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { conectedStore } from "@/app/context/Context";

export const ConnectShopify: React.FC = () => {
  const router = useRouter();
  
  const handleRoute = () => {
    if (conectedStore.value.includes("Shopify")) {
      router.push("/account-setup/connect-store/already-connected");
      return;
    }
    conectedStore.value = ["Shopify"];
    router.push("/account-setup/connect-store/connect-store-success");
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <ul className="flex flex-col gap-4">
        <li className="flex flex-row gap-3">
          <FaCheck className="text-successColor w-4 mt-1" />
          <div className="flex flex-col gap-1">
            <h2>Track orders and shipping</h2>
            <p>Global coverage with 600+ couriers supported</p>
          </div>
        </li>
        <li className="flex flex-row gap-3">
          <FaCheck className="text-successColor w-4 mt-1" />
          <div className="flex flex-col gap-1">
            <h2>Manage orders</h2>
            <p>
              Allow customers to track, return, exchange, or report problems
              with their orders
            </p>
          </div>
        </li>
        <li className="flex flex-row gap-3">
          <FaCheck className="text-successColor w-5 mt-1" />
          <div className="flex flex-col gap-1">
            <h2>Process returns and exchanges</h2>
            <p>
              Automatically checks your store policy and existing inventory
              before resolving or escalating each request
            </p>
          </div>
        </li>
      </ul>
      <CustomBtn
        type="submit"
        onClick={handleRoute}
        primary
        className={`w-[364px]`}
      >
        Connect store
      </CustomBtn>

      <Link href="/account-setup/connect-store/select-platform" className={``}>
        <p>I don’t use Shopify</p>
      </Link>
    </div>
  );
};
