import Image from "next/image";
import { SuccessComponent } from "@/app/components/successComponent/SuccessComponent";
import { TextWithLink } from "@/app/components/ui/TextWithLink";

export default function PageCustomSupportSuccess() {

  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12 ">
        <div className="flex flex-col items-center m-auto max-w-[347px] pt-[27px] pb-[62px] ">
          <Image
            src="/check-mark-svg.svg"
            width={160}
            height={160}
            alt="logo Chad"
          />
          <SuccessComponent
            title="Use your desktop to access Chad"
            text="Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer."
            textButton="Ok"
            link="/"
          />
          <TextWithLink
            linkText="Logout"
            text="Not xyz@triceps.com?"
            link="/"
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}
