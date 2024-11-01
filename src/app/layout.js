import localFont from "next/font/local";
import Navbar from '../components/Navbar';
import "./globals.css";
import { LanguageProvider } from '../components/language/LanguageContext';

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
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
