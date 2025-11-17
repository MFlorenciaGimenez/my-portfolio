import "./globals.css";
import { LanguageProvider } from "./context/LenguageContext";
import Navbar from "./components/NavBar";
// import Footer from "./components/Footer";

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
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <LanguageProvider>
          <Navbar />
          <main className="px-6 py-10 max-w-4xl mx-auto">{children}</main>
          {/* <Footer /> */}
        </LanguageProvider>
      </body>
    </html>
  );
}
