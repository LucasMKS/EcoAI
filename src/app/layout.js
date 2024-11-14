import localFont from "next/font/local";
import Navbar from '../components/Navbar';
import "./globals.css";
import { LanguageProvider } from '../components/language/LanguageContext';
import { Toaster } from "@/src/components/ui/toaster"
import { PersistentToast } from '../components/PersistentToast'
import Footer from '../components/FooterPage';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sustentabilidade Inteligente",
  description: "Sustentabilidade Inteligente",
};

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main >
            {children}
            <div className="bg-neutral-900"><Footer /> </div>
          </main>
          <Toaster />
          <PersistentToast />
        </LanguageProvider>
      </body>
    </html>
  );
}
