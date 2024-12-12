import {
  Atom,
  BatteryCharging,
  Contact,
  House,
  Info,
  ShieldCheck,
  ShoppingBasket,
} from "lucide-react";

export const NAV_MENU = [
  {
    name: "Trang chủ",
    link: "/",
    isDropdown: false,
  },
  {
    name: "Giới thiệu",
    link: "/about",
    isDropdown: false,
  },
  {
    name: "Sản phẩm",
    link: "/products",
    isDropdown: false,
  },
  {
    name: "Dự án",
    link: "/projects",
    isDropdown: false,
  },
  {
    name: "Dịch vụ",
    link: "/services",
    isDropdown: false,
  },
  {
    name: "Liên hệ",
    link: "/contact",
    isDropdown: false,
  },
];

export const MOBILE_NAV_MENU = [
  {
    icon: House,
    title: "Trang chủ",
    url: "/",
  },
  {
    icon: Info,
    title: "Giới thiệu",
    url: "/about",
  },
  {
    icon: ShoppingBasket,
    title: "Sản phẩm",
    url: "/products",
  },
  {
    icon: Atom,
    title: "Dự án",
    url: "/projects",
  },
  {
    icon: BatteryCharging,
    title: "Dịch vụ",
    url: "/services",
  },
  {
    icon: Contact,
    title: "Liên hệ",
    url: "/contact",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật",
    url: "/account-overview/security",
  },
];

export const USER_ARRAY_MENU = [
  {
    title: "Tổng quan",
    href: "/account-overview",
  },
  {
    title: "Lịch sử mua hàng",
    href: "/",
  },
];
