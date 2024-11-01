"use client";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FaCheck } from "react-icons/fa6";
import { ProgressBarProps } from "@/app/types/components";
import { ProgressBarBtn } from "./ProgressBarBtn";
import { usePathname, useRouter } from "next/navigation";

const array = [
  "Welcome",
  "Connect your Shopify store",
  "Connect your customer support email",
  "Done",
];
export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  steps = 1,
}) => {

  const [currentPage, setCurrentPage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
      setCurrentPage(pathname);
    }, [pathname]);

    const mainUrl = "/account-setup";
    const pageOrder = [
      `${mainUrl}`,
      `${mainUrl}/connect-store`,
      `${mainUrl}/connect-support`,
      `${mainUrl}/login`,
    ];
 const handleNextPage = () => {

   // Define the logic for determining the next page

   const currentIndex = pageOrder.indexOf(currentPage);
   if (currentIndex !== -1 && currentIndex < pageOrder.length - 1) {
     // Navigate to the next page
     const nextPage = pageOrder[currentIndex + 1];
     router.push(nextPage);

   } else {
     setDisabled(true );
   }
 };
const isFirstPage = pageOrder.indexOf(currentPage) === 0;

  const handlePrevStep = () => {
   setDisabled(false);

    router.back();
  };

  return (
    <div>
      <div className="flex flex-col items-start h-[353px]">
        {array.map((text, index) => {
          return (
            <div className="flex flex-col w-full items-start" key={nanoid()}>
              <div className="flex items-center w-full justify-start gap-4">
                <div
                  className={`flex items-center justify-center size-[44px] rounded-full border-2 
                    transition-all ease-in-out duration-300 ${
                      index + 1 <= currentStep
                        ? "border-blue-500"
                        : "border-emptyProgressBar"
                    }`}
                >
                  {index < currentStep && (
                    <div className="flex items-center justify-center rounded-full bg-blue-500 size-8 text-white text-[20px]">
                      <FaCheck className="size-4" />
                    </div>
                  )}
                </div>
                <p
                  className={`text-base
                    ${
                      index < currentStep
                        ? "text-white"
                        : "text-emptyProgressBar"
                    }`}
                >
                  {text}
                </p>
              </div>
              {index + 1 < steps && (
                <div
                  className={`w-[1px] h-12 transition-all ml-[21px] -my-[1px] ease-in-out duration-300
                    ${
                      index + 1 < currentStep
                        ? "bg-blue-500"
                        : "bg-emptyProgressBar"
                    }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-4">
        <ProgressBarBtn
          isDisabled={isFirstPage}
          onClick={handlePrevStep}
          type="primary"
          currentSlide={currentStep}
          text="Back"
        />
        <ProgressBarBtn
          isDisabled={disabled}
          isNext
          onClick={handleNextPage}
          type="primary"
          currentSlide={currentStep}
          text="Next"
        />
      </div>
    </div>
  );
};
