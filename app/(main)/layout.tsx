import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav />
      <main className="min-h-screen flex-1 px-4 sm:px-6">{children}</main>
      <Footer />
    </>
  );
}
