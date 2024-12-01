import MainContentLayout from '@/components/layouts/MainContentLayout';
import HomeBanner from '@/components/pages/home/home-banners/HomeBanner';

export default function Home() {
  return (
    <MainContentLayout>
      <main className="min-h-screen overflow-x-hidden">
        <HomeBanner />
      </main>
    </MainContentLayout>
  );
}
