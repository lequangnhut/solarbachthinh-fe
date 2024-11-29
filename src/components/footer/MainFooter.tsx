import Link from 'next/link';

const MainFooter = () => {
  return (
    <div className="z-[-50] bg-white dark:bg-black">
      <div
        className="flex min-h-screen items-center justify-center gap-[20px] gap-y-[40px] bg-white px-[20px] py-[80px] transition-colors dark:bg-black dark:text-white md:px-[8%] xl:px-[15%]"
        id="the-end"
      >
        <div>
          <div>
            <h2
              className="text-6xl font-semibold uppercase text-orange-600"
              style={{ opacity: 1, transform: 'none' }}
            ></h2>
            <p className="my-4 text-[22px]" style={{ opacity: 1, transform: 'none' }}></p>
            <p className="text-[22px]" style={{ opacity: 1, transform: 'none' }}>
              <strong className="text-orange-500">(◕‿↼)</strong>.
            </p>
          </div>
          <div className="content" style={{ opacity: 1, transform: 'none' }}>
            <div className="container mt-4"></div>
          </div>
        </div>
      </div>

      <div className="text:black flex h-[40px] justify-center gap-1 bg-white text-sm dark:bg-black dark:text-white md:text-base">
        <p>Copyright © 2024 All Rights Reserved, </p>
        <p>
          built and designed by
          <Link
            href="https://www.facebook.com/leewangnhut/"
            className="ml-1 text-orangeBase underline"
            target="_blank"
            rel="noreferrer"
          >
            Le Quang Nhut
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default MainFooter;
