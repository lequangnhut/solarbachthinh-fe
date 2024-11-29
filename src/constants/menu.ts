import { Bolt, BookText, FileCogIcon, FolderGit2, House, UserRoundCog } from 'lucide-react';

export const NAV_MENU = [
  {
    name: 'overview',
    link: '#overview',
  },
  {
    name: 'skills',
    link: '#skills',
  },
  {
    name: 'projects',
    link: '#projects',
  },
  {
    name: 'aboutMe',
    link: '#about-me',
  },
  {
    name: 'contact',
    link: '#contact',
  },
  {
    name: 'theEnd',
    link: '#the-end',
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
