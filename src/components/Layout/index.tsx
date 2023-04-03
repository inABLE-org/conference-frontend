import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type LayoutProps = {
  pageTitle?: string;
  children: React.ReactNode;
};

export default function Layout({ pageTitle, children }: LayoutProps) {
  return (
    <div>
      <Nav
        pageTitle={
          pageTitle
            ? `${pageTitle} | Inclusive Africa Conference 2023`
            : "Inclusive Africa Conference 2023"
        }
      />
      <main id="mainContent" className="min-h-[39.58398rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
