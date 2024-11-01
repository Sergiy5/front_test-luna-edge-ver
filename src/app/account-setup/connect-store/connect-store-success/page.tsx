"use client";

import Image from "next/image";
import { SuccessComponent } from "@/app/components/successComponent/SuccessComponent";
import { TextWithLink } from "@/app/components/ui/TextWithLink";
import { conectedStore } from "@/app/context/Context";

export default function PageConnectStoreSuccess() {

  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12 ">
        <div className="flex flex-col items-center m-auto max-w-[347px] pt-[27px] pb-[62px] ">
          <Image
            src="/shopify-avatar-svg.svg"
            width={80}
            height={80}
            alt="logo Chad"
            className="mb-8"
          />
          <SuccessComponent
            text={`Chad is now able to manage customer support requests for ${conectedStore.value.join(
              " "
            )}.`}
            title="Store Connected"
            textButton="Continue"
            link="/account-setup/connect-support"
          />
          <TextWithLink
            text="Wrong store?"
            link="/account-setup/connect-store"
            linkText="Connect another one"
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}
