"use client";

import { SideBar } from "../components/sideBar/SideBar";
// import { windowWidthSignal } from "../context/Context";
// import useWindowWidth from "../hooks/useWundowWidth";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex xl:flex-row max-w-[1440px] mx-auto">
      <SideBar />
      <main className="flex w-full">{children}</main>
    </div>
  );
}
