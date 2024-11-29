'use client';

import Link from 'next/link';
import Image from 'next/image';

import useCheckHydrationMismatch from '@/hooks/useCheckHydrationMismatch';

const MainLogo = () => {
  const [mounted] = useCheckHydrationMismatch();

  if (!mounted) {
    return <div className="min-w-[100px]"></div>;
  }

  return (
    <div className="font-extrabold text-blackBase dark:text-whiteBase">
      <Link href="/">
        <Image src="logo.png" alt="logo" width={36} height={36} />
      </Link>
    </div>
  );
};

export default MainLogo;
