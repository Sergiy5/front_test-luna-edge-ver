import { Login } from "@/app/components/auth/Login";
import { InfoStep } from "@/app/components/infoStep/InfoStep";
import { MainLogo } from "@/app/components/ui/MainLogo";


export default function RegisterPage() {
  return (
    <div className="container m-auto w-full ">
      <div className="flex flex-col gap-12">
        <MainLogo />

        <InfoStep
          title="Welcome back"
          text="Feeling ready to take on the day? Chad is too!"
        />
        <Login />
      </div>
    </div>
  );
}
