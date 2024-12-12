"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

interface IListLinkProps {
  listLink: Array<{
    icon: React.ReactNode;
    content: string;
    link: string;
    path: string;
  }>;
}

const SidebarLayout = ({ listLink }: IListLinkProps) => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("wallet-overview")) {
    }
  }, [pathname]);

  return (
    <div className="hidden w-full border-b border-solid border-gray-300 bg-white px-3 py-3 transition-transform sm:block md:sticky md:left-0 md:top-0 md:z-40 md:h-screen md:w-[300px] md:border-r md:px-0">
      <div className="scrollbarX hiddenScrollBar h-full overflow-x-scroll md:overflow-y-auto">
        <ul className="flex items-center gap-4 font-medium md:block md:space-y-2">
          {listLink.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.link}
                  className={cn(
                    pathname.split("/").pop() === item.path
                      ? "!text-primary"
                      : "",
                    "group flex w-full items-center gap-2 whitespace-nowrap rounded-lg px-2 py-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:w-full md:px-6 md:py-[18px]",
                  )}
                >
                  {item.icon}
                  <span className="md:ml-3 md:text-base">{item.content}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarLayout;
