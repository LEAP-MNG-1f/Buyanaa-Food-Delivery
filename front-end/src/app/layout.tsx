// "use client";
import "./globals.css";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { StateContextProvider } from "./context";
import { useStateContext } from "./context";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StateContextProvider>
          <Header />
          <div className="flex flex-col"> {children}</div>
        </StateContextProvider>

        <Footer />
      </body>
    </html>
  );
}
