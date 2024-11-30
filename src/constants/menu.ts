import { Bolt, BookText, FileCogIcon, FolderGit2, House, UserRoundCog } from 'lucide-react';

export const NAV_MENU = [
  {
    name: 'Trang chủ',
    link: '/',
    isDropdown: false,
  },
  {
    name: 'Giới thiệu',
    link: '/',
    isDropdown: false,
  },
  {
    name: 'Sản phẩm',
    link: '/',
    isDropdown: false,
  },
  {
    name: 'Dự án',
    link: '/',
    isDropdown: false,
  },
  {
    name: 'Dịch vụ',
    link: '/',
    isDropdown: false,
  },
  {
    name: 'Liên hệ',
    link: '/',
    isDropdown: false,
  },
];

export const MOBILE_NAV_MENU = [
  {
    link: '#overview',
    icon: House,
  },
  {
    link: '#skills',
    icon: BookText,
  },
  {
    link: '#project',
    icon: FolderGit2,
  },
  {
    link: '#about-me',
    icon: UserRoundCog,
  },
  {
    link: '#contact',
    icon: FileCogIcon,
  },
  {
    link: '#the-end',
    icon: Bolt,
  },
];
