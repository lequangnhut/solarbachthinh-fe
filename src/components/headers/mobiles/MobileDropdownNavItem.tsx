import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

interface ISubMenuItem {
  name: string;
  link: string;
}

interface INavItem {
  name: string;
  link: string;
  subMenu?: ISubMenuItem[];
}

interface IDropdownNavItemProps {
  navItem: INavItem;
}

const MobileDropdownNavItem = ({ navItem }: IDropdownNavItemProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="pet">
        <AccordionTrigger className="rounded-md pl-2 text-base font-normal hover:bg-[#f2f4f6] hover:no-underline">
          {navItem.name}
        </AccordionTrigger>
        <AccordionContent className="p-0 font-normal">
          {navItem.subMenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.link}
              className="flex h-12 w-full items-center justify-start rounded-md px-4 text-base font-normal hover:bg-[#f2f4f6]"
            >
              {subItem.name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileDropdownNavItem;
