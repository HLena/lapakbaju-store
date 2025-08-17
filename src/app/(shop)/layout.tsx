import Navbar from '../../components/ui/navbar/Navbar';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="min-h-screen bg-red-500">
        { children }
      </main>
    </>
  );
}
