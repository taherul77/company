"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      // Extract base path
      const basePath = pathname.replace(/^\/(en|bn)/, "");
      router.replace(`/${nextLocale}${basePath}`);
    });
  };

  return (
    <div className="">
      <select
        className="select-sm select-primary bg-transparent cursor-pointer "
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">EN</option>
        <option value="bn">BN</option>
      </select>
    </div>
  );
}
