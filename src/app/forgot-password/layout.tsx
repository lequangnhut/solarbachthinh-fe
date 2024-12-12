import NoFooterContentLayout from "@/components/layouts/NoFooterContentLayout";

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NoFooterContentLayout>
      <main className="min-h-screen bg-[#f5f7f8]">{children}</main>
    </NoFooterContentLayout>
  );
}
