import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/NavBar";

export const metadata = {
  title: "Florencia Gimenez — Portfolio",
  description: "Full Stack Developer — Backend oriented",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-950 text-white min-h-screen">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
