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
      <div className="min-w-0 flex-1 w-full max-w-none overflow-x-hidden px-2 pt-10 pb-16 sm:px-3 md:px-4">
        {children}
      </div>
      <Footer />
    </div>
  );
}
