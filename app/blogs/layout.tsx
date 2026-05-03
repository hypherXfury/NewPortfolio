import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50/50 dark:bg-stone-950 dark:text-stone-100 font-cormorant flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-170 mx-auto px-6 w-full pt-10 pb-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}
