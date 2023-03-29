import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Nav />
      <main className="min-h-[23.58398rem] bg-primary-2">
        {children}
      </main>
      <Footer />
    </>
  );
}
