import MainHeader from "../headers/MainHeader";

const NoFooterContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default NoFooterContentLayout;
