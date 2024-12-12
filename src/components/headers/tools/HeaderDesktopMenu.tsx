import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";
import { NAV_MENU } from "@/constants/menu";
import { useAppSelector } from "@/hooks/store";
import UserToolBox from "../UserToolBox";

const HeaderDesktopMenu = () => {
  const pathname = usePathname();
  const currUser = useAppSelector((state) => state.user.userInfo);

  return (
    <div className="mr-6 flex-grow items-center justify-end space-x-7 font-semibold lg:flex">
      {NAV_MENU.map((navItem, key) => (
        <Link
          href={navItem.link}
          className={cn(
            "py-2 text-gray-700 transition hover:text-primary",
            pathname === navItem.link && "font-bold text-primary",
          )}
          key={key}
        >
          {navItem.name}
        </Link>
      ))}

      {currUser && (
        <div className="border-l border-solid border-gray-300 pl-5">
          <UserToolBox />
        </div>
      )}
    </div>
  );
};

export default HeaderDesktopMenu;
