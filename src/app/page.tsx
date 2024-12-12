import MainContentLayout from "@/components/layouts/MainContentLayout";
import HomeAbout from "@/components/pages/home/home-abouts/HomeAbout";
import HomeBanner from "@/components/pages/home/home-banners/HomeBanner";
import HomeFutures from "@/components/pages/home/home-futures/HomeFutures";
import HomeServices from "@/components/pages/home/home-services/HomeServices";

export default function Home() {
  return (
    <MainContentLayout>
      <main className="min-h-screen overflow-x-hidden">
        <HomeBanner />
        <HomeFutures />
        <HomeAbout />
        <HomeServices />
      </main>
    </MainContentLayout>
  );
}
