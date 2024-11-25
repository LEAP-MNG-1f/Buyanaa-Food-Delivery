import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-col"> {children}</div>

        <Footer />
      </body>
    </html>
  );
}
