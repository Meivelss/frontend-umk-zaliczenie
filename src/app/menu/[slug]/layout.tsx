export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="min-w-screen min-h-screen antialiased scroll-smooth pt-[64px] px-12 bg-light"
    >
      {children}
    </div>
  );
}
