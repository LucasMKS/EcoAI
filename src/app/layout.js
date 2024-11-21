import Navbar from '../components/Navbar';
import "./globals.css";
import { LanguageProvider } from '../components/language/LanguageContext';
import Footer from '../components/FooterPage';
import { Inter, Roboto, Alkatra, Roboto_Condensed } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '700'],
});

const alkatra = Alkatra({
  subsets: ['latin'],
  variable: '--font-alkatra',
  weight: '500',
});

const roboto_Condensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto_Condensed',
  weight: ['300', '400', '700'],
});
export const metadata = {
  title: "Sustentabilidade Inteligente",
  description: "Sustentabilidade Inteligente",
};

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.variable} ${roboto.variable} ${alkatra.variable} ${roboto_Condensed.variable}`}>
        <LanguageProvider>
          <Navbar />
          <main >
            {children}
            <div className="bg-neutral-900"><Footer /> </div>
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
