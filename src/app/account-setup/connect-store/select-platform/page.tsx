import { InfoStep } from "@/app/components/infoStep/InfoStep";
import { SelectPlatform } from "@/app/components/selectPlatform/SelectPlatform";
import { ProgressBarMobile } from "@/app/components/ui";
import { MainLogo } from "@/app/components/ui/MainLogo";

export default function PageSelectPlatform() {
  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12">
        <MainLogo />

        <ProgressBarMobile currentStep={2} steps={4} />

        <InfoStep
          text="Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform."
          title="Don’t use Shopify?"
        />
        <SelectPlatform />
      </div>
    </div>
  );
}
