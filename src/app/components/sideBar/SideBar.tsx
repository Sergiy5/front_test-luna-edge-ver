import { OnBoardingStats } from "../onBoardingStats/OnBoardingStats";
import { ProgressBar } from "../ui/ProgressBar";

export const SideBar: React.FC = () => {
  return (
    <div className="hidden xl:block pt-[166px] pb-[56px] px-[102px] min-w-[568px] h-[900px] bg-bgSideBar">
      <div className="flex flex-col gap-[172px] w-[364px] items-center">
        <ProgressBar currentStep={1} steps={4} />
        <OnBoardingStats />
      </div>
    </div>
  );
};
