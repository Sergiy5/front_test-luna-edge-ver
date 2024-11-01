import { InfoStep } from "../../components/infoStep/InfoStep";
import { MainLogo } from "@/app/components/ui/MainLogo";
import { ProgressBarMobile } from "@/app/components/ui";
import { ConnectSupport } from "@/app/components/connectSupport/ConnectSupport";

export default function PageConnectSupport() {


  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12">
        <MainLogo />
        <ProgressBarMobile currentStep={3} steps={4} />

        <InfoStep
          text="Allows Chad to send automated responses on your behalf from your usual support mailbox"
          title="Connect to customer support email"
        />
        <ConnectSupport />
      </div>
    </div>
  );
}
