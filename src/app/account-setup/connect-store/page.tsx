import { ConnectShopify } from "@/app/components/connectShopify/ConnectShopify";
import { InfoStep } from "../../components/infoStep/InfoStep";
import { MainLogo } from "@/app/components/ui/MainLogo";
import { ProgressBarMobile } from "@/app/components/ui";

export default function PageConnectStore() {
  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12">
        <MainLogo />

        <ProgressBarMobile currentStep={2} steps={4} />
        
        <InfoStep
          text="Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options."
          title="Connect to Shopify Store"
        />
        <ConnectShopify />
      </div>
    </div>
  );
}
