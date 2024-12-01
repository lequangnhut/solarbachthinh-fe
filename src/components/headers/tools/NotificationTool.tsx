import React from 'react';
import { useAppSelector } from '@/hooks/store';
import BellBtn from '@/components/commons/BellBtn';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';

const NotificationTool = () => {
  const currUser = useAppSelector((state) => state.user.userInfo);

  if (!currUser) return null;

  return (
    <HoverCard openDelay={400}>
      <HoverCardTrigger>
        <BellBtn width={20} height={20} />
      </HoverCardTrigger>
      <HoverCardContent
        side="bottom"
        className="p-2 data-[state=closed]:duration-300 data-[state=open]:duration-300 md:w-[540px] 2xl:w-[640px]"
        sideOffset={14}
      >
        <div className="h-full w-full text-xl">
          <div className="px-4 py-2 font-medium text-[#010001] dark:text-[#FDFFFC]">Thông báo</div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default NotificationTool;
