import { FilterPanel, Navbar } from "@/components";


export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='relative'>
        <Navbar/>
      </header>
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="py-4 flex max-w-7xl m-auto min-h-screen">
          { children }
        </div>
      </main>
      <footer className="p-4 h-48 bg-violet-700">

      </footer>
    </>
  );
}
