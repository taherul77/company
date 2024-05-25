"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assests/logo.png";
import NavItem from "./NavItem";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the visibility of NavItem
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        className={`
          shadow-lg w-full fixed bg-black/30 top-0 z-50 backdrop-blur 
        `}
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between mx-auto">
            <Link href={`/${locale}/`} className="" >
              <Image
                src={Logo}
                width={150}
                height={80}
                alt="ATI Limited Logo"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-x-6">
              <div className="flex items-center gap-4">
                <NavItem />
              </div>
            </div>
            <div className="flex items-center z-50">
              <div className="items-center text-white hidden lg:flex">
                <Link
                  href={`/${locale}/revolution`}
                  className={`${
                    pathname === `/${locale}/revolution`
                      ? "flex items-center px-4 active underline underline-offset-8 font-bold"
                      : "flex items-center hover:underline underline-offset-8 px-4"
                  }`}
                >
                  {t("revolution")}
                </Link>
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-[300px]"
              aria-controls="navbar-default"
              aria-expanded={isNavOpen ? "true" : "false"}
              onClick={handleNavToggle}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isNavOpen && (
        <div className="absolute top-24 bg-white lg:hidden z-[99999] duration-500 w-full">
          <div className="flex flex-col p-4 border-t">
            <li className="flex">
              <Link
                className={`link ${
                  pathname === `/${locale}/solutions`
                    ? "flex items-center px-4 active underline underline-offset-8 font-bold"
                    : "flex items-center hover:underline underline-offset-8 px-4"
                }`}
                href={`/${locale}/solutions`}
              >
                {t("solutions")}
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/${locale}/expertise`
                    ? " flex items-center px-4 active underline  underline-offset-8 font-bold"
                    : "flex items-center hover:underline underline-offset-8 px-4"
                }`}
                href={`/${locale}/expertise`}
              >
                {t("expertise")}
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/${locale}/about`
                    ? "flex items-center px-4 active underline  underline-offset-8 font-bold"
                    : "flex items-center hover:underline underline-offset-8 px-4"
                }`}
                href={`/${locale}/about`}
              >
                {t("about")}
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/${locale}/business`
                    ? "flex items-center px-4 active underline underline-offset-8 font-bold"
                    : "flex items-center hover:underline underline-offset-8 px-4"
                }`}
                href={`/${locale}/business`}
              >
                {t("business")}
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/${locale}/revolution`
                    ? "flex items-center px-4 active underline underline-offset-8 font-bold"
                    : "flex items-center hover:underline underline-offset-8 px-4"
                }`}
                href={`/${locale}/revolution`}
              >
                {t("revolution")}
              </Link>
            </li>
          </div>
        </div>
      )}
    </>
  );
}
