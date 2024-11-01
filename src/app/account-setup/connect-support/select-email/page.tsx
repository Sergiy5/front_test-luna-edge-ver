import { InfoStep } from "@/app/components/infoStep/InfoStep";
import { SelectEmail } from "@/app/components/selectEmail/SelectEmail";
import { ProgressBarMobile } from "@/app/components/ui";
import { MainLogo } from "@/app/components/ui/MainLogo";

export default function PageSelectEmail() {
  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12">
        <MainLogo />

        <ProgressBarMobile currentStep={3} steps={4} />

        <InfoStep
          text="Chad Beta is currently only integrated with Gmail. We’ll send you an email when Chad becomes compatible with your support ticket platform."
          title="Don’t use Gmail?"
        />
        <SelectEmail />
      </div>
    </div>
  );
}
