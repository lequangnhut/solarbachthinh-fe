import MainContentLayout from "@/components/layouts/MainContentLayout";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContentLayout>
      <main className="min-h-screen">{children}</main>
    </MainContentLayout>
  );
}
