import Image from "next/image";
import { SuccessComponent } from "@/app/components/successComponent/SuccessComponent";

export default function PageSelectPlatformSuccess() {
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
            text="Thank you for your interest in Chad! We’ll be hard at work building
          integrations to support your platform."
            title="Response received"
            textButton="Done"
            link="/"
          />
        </div>
      </div>
    </div>
  );
}
