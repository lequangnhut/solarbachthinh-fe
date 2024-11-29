import { ThemeProvider } from 'next-themes';
import MainHeader from '../headers/MainHeader';
import MainFooter from '../footer/MainFooter';

const MainContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <MainHeader />
      {children}
      <MainFooter />
    </ThemeProvider>
  );
};

export default MainContentLayout;
