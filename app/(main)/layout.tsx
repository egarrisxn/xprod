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
      <main>{children}</main>
      <Footer />
    </>
  );
}
