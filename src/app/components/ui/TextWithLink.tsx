import Link from "next/link";

interface TextWithLinkProps {
  text: string;
  link: string;
  linkText: string;
  className?: string;
}
export const TextWithLink: React.FC<TextWithLinkProps> = ({
  text,
  link,
  linkText,
  className,
}) => {
  return (
    <p
      className={`${className} mx-auto text-xs text-labelInputColor tracking-wide`}
    >
      {text}{" "}
      <Link href={link} className="text-bgMainBtn">
        {linkText}
      </Link>{" "}
    </p>
  );
};

