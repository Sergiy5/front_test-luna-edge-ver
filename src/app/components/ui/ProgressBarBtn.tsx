import { IoIosArrowBack } from "react-icons/io";

interface ProgressBarBtn {
  onClick: () => void;
  isNext?: boolean;
  type: "primary" | "secondary";
  currentSlide: number;
  text: string;
  isDisabled?: boolean;
}
export const ProgressBarBtn: React.FC<ProgressBarBtn> = ({
  onClick,
  isNext,
  type,
  text,
  isDisabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`flex text-emptyProgressBar text-base font-normal leading-[108%] rounded items-center gap-2 px-3 py-2
        ${isNext && "flex-row-reverse"}
         ${type && ""}
          ${
            isDisabled
              ? "bg-transparent text-opacity-25 cursor-default"
              : "text-textBtnActive xl:bg-bgBtn"
          }`}
    >
      <IoIosArrowBack className={`size-4 ${isNext && "rotate-180"}`} />
      {text}
    </button>
  );
};
