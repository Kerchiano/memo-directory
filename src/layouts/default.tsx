import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center gap-2 justify-center py-3">
        <span className="text-default-600">aka</span>
        <p className="text-primary">Kerchiano</p>
      </footer>
    </div>
  );
}
