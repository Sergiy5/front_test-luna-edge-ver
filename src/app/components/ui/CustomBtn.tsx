
interface CustomBtnProps {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  secondary?: boolean;
  primary?: boolean;
}
export const CustomBtn: React.FC<CustomBtnProps> = ({
  type,
  children,
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`font-normal text-bgContent [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.25)] 
        w-full h-[43px] bg-bgMainBtn hover:bg-btnHover active:bg-btnActive text-sm focus:outline-none rounded-md
         py-2 px-4 ${className} `}
    >
      {children}
    </button>
  );
};
