import Image from "next/image";
import Link from "next/link";

export const MainLogo: React.FC = () => {
    return (
      <Link href="/" passHref className="flex flex-row gap-[2px] items-center xl:-mb-6" >
            <Image src="/logo.svg" width={30} height={24} alt="logo Chad"></Image>
            <p className="text-2xl font-bold" >Chad</p>
      </Link>
    );
}