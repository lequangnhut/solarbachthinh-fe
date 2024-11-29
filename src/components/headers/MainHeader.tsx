import { useEffect, useState } from 'react';
import HeaderMobile from './mobiles/HeaderMobile';

const MainHeader = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') {
        return;
      }

      if (window.scrollY > 50 && !isScrolled) {
        setScrolled(true);
      } else if (window.scrollY <= 50 && isScrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
      <div className="container hidden md:block">
        <div
          className={`fixed left-0 top-0 z-50 flex items-center justify-between px-[10%] transition-all md:w-full ${
            isScrolled
              ? 'border-none border-b-orangeBase bg-whiteBase dark:bg-blackBase dark:text-white md:border-b-[2px] md:border-solid md:py-5'
              : 'border-b-orangeBase dark:text-white md:py-10'
          }`}
        >
          <div>
            <img src="" />
          </div>

          <div className="flex items-center space-x-2"></div>
        </div>
      </div>
      <div className="block md:hidden">
        <HeaderMobile />
        <div className="flex items-center space-x-2"></div>
      </div>
    </>
  );
};

export default MainHeader;
