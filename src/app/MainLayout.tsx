export function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="px-12 lg:px-32 xl:px-40 2xl:px-80">{children}</section>
  );
}