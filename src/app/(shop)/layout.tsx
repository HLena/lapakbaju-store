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
        <div className="flex max-w-7xl m-auto min-h-screen">
          { children }
        </div>
      </main>
    </>
  );
}
