"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assests/logo.png";
import NavItem from "./NavItem";
import LocalSwitcher from "@/components/globalComponents/LocalSwitcherComponent/LocalSwitcher";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
export default function Nav() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();
  return (
    <nav
      className={`
        shadow-lg w-full fixed bg-black/30 top-0 z-10 backdrop-blur 
    }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}/`}>
            <Image src={Logo} width={150} height={40} alt="ATI Limited Logo" />
          </Link>
          <div className="hidden items-center gap-x-6 sm:flex">
            <div className=" flex items-center gap-4">
              <NavItem></NavItem>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="items-center text-white  hidden md:flex">
              <Link
                href={`/${locale}/revolution`}
                className={`${
                  pathname === `/${locale}/revolution`
                    ? " flex items-center px-4 active underline  underline-offset-8 text-xl"
                    : "flex items-center hover:underline underline-offset-8 px-4"
                }`}
              >
                {t("revolution")}
              </Link>
            </div>
            <div className="items-center text-white  hidden md:flex">
              <LocalSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
