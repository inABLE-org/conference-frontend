import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      <main id="mainContent" className="min-h-[39.58398rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
