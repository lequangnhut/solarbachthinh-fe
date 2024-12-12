import React from "react";
import { Layers, ShieldCheck } from "lucide-react";

import NoFooterContentLayout from "@/components/layouts/NoFooterContentLayout";
import SidebarLayout from "@/components/side-bars/layouts/SidebarLayout";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const listLink = [
    {
      icon: <Layers />,
      content: "Tổng quan",
      link: "/account-overview",
      path: "account-overview",
    },
    {
      icon: <ShieldCheck />,
      content: "Bảo mật",
      link: "/account-overview/security",
      path: "security",
    },
  ];

  return (
    <NoFooterContentLayout>
      <div className="relative min-h-screen bg-white md:flex">
        <SidebarLayout listLink={listLink} />
        {children}
      </div>
    </NoFooterContentLayout>
  );
};

export default Layout;
