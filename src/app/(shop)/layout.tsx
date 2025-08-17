import Navbar from '../../components/ui/navbar/Navbar';

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
      <main className="min-h-screen bg-white pt-16">
        { children }
      </main>
    </>
  );
}
