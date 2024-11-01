import { Register } from "../components/auth/Register";
import { InfoStep } from "../components/infoStep/InfoStep";
import { ProgressBarMobile } from "../components/ui";
import { MainLogo } from "../components/ui/MainLogo";

export default function RegisterPage() {
  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12">
        <MainLogo />

        <ProgressBarMobile currentStep={1} steps={4} />

        <InfoStep
          text="Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track shipments 24/7 without driving you crazy."
          title="Welcome to Chad"
        />
        <Register />
      </div>
    </div>
    
  );
}
