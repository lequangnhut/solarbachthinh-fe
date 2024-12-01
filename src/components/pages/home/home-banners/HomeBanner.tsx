import HomeDots from './HomeDots';
import HomeCarousel from './HomeCarousel';

const HomeBanner = () => {
  return (
    <div className="relative mb-10 h-[500px] w-full overflow-hidden bg-gray-900 md:h-[100vh]">
      <HomeCarousel />
      <HomeDots />
    </div>
  );
};

export default HomeBanner;
