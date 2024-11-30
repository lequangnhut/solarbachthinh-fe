import { Bolt, BookText, FileCogIcon, FolderGit2, House, UserRoundCog } from 'lucide-react';

export const NAV_MENU = [
  {
    name: 'Trang chủ',
    link: '#overview',
    isDropdown: false,
  },
  {
    name: 'Giới thiệu',
    link: '#skills',
    isDropdown: false,
  },
  {
    name: 'Sản phẩm',
    link: '#projects',
    isDropdown: false,
  },
  {
    name: 'Dự án',
    link: '#about-me',
    isDropdown: false,
  },
  {
    name: 'Dịch vụ',
    link: '#contact',
    isDropdown: false,
  },
  {
    name: 'Liên hệ',
    link: '#contact',
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
