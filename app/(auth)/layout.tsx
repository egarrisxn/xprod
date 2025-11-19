import AuthNav from "@/components/auth-nav";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNav />
      <main>{children}</main>
    </>
  );
}
