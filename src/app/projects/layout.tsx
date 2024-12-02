import MainContentLayout from '@/components/layouts/MainContentLayout';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainContentLayout>
      <main className="min-h-screen">{children}</main>
    </MainContentLayout>
  );
}
