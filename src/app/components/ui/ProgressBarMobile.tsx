'use client';

import React, { useEffect, useState } from "react";
import { Flex, Progress } from "antd";
import { ProgressBarProps } from "@/app/types/components";
import { usePathname, useRouter } from "next/navigation";
import { ProgressBarBtn } from "./ProgressBarBtn";

export const ProgressBarMobile: React.FC<ProgressBarProps> = ({ steps = 4, currentStep }) => {
  
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
      setDisabled(true);
    }
  };
  const isFirstPage = pageOrder.indexOf(currentPage) === 0;

  const handlePrevStep = () => {
    setDisabled(false);

    router.back();
  };

  return (
    <div className="xl:hidden">
      <Flex gap="small" vertical>
        <div className="flex flex-col items-center">
          <Progress
            percent={(currentStep * 100) / steps}
            strokeColor="#C9D3E0"
            size="small"
            format={() => (
              <span className="absolute -top-4 left-0 text-xs text-labelInputColor tracking-wide">
                {`Step ${currentStep} from ${steps}`}
              </span>
            )}
          />
        </div>
      </Flex>
      <div className="flex items-center justify-between w-full">
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
  );};