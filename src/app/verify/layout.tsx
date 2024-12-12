import NoFooterContentLayout from "@/components/layouts/NoFooterContentLayout";

export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NoFooterContentLayout>
      <main className="min-h-screen">{children}</main>
    </NoFooterContentLayout>
  );
}
