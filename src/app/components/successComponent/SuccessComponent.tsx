'use client';

import { CustomBtn } from "../ui";
import { useRouter } from "next/navigation";

interface SuccessComponentProps {
  text?: string;
  title: string;
  textButton: string;
  link: string;
}

export const SuccessComponent: React.FC<SuccessComponentProps> = ({
  text,
  title,
  textButton,
  link,
}) => {
  const router = useRouter();

  const hendleRoute = () => {
    router.push(link);
  };

  return (
    <div className="flex items-center w-full flex-col gap-4 ">
      <h3>{title} </h3>
      <p className="text-center tracking-[-0.02em] text-sm">
        {text}
      </p>
      <CustomBtn type="button" onClick={hendleRoute}>
        {textButton}
      </CustomBtn>
    </div>
  );
};
