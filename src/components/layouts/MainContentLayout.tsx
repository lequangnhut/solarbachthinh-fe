import MainHeader from '../headers/MainHeader';
import MainFooter from '../footer/MainFooter';

const MainContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
};

export default MainContentLayout;
