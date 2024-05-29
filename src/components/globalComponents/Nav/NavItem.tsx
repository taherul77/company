"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavItem() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const navItem = (
    <>
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
      <li className="flex">
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
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/${locale}/about`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold"
              : "flex items-center hover:underline underline-offset-8 px-4"
          }`}
          href={`/${locale}/about`}
        >
          {t("about")}
        </Link>
      </li>
      <li className="flex">
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
    </>
  );

  return (
    <ul className="items-stretch hidden space-x-3 text-white lg:flex">
      {navItem}
    </ul>
  );
}
