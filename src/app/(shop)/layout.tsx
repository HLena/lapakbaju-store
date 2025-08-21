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
      <main className="min-h-screen pt-16 bg-white">
        <div className="flex max-w-7xl m-auto min-h-screen mt-10">
          { children }
        </div>
      </main>
      <footer className="p-4 h-48 bg-violet-700">

      </footer>
    </>
  );
}
