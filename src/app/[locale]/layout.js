import Navbar from "../../components/Navbar";
import "./globals.css";
import Footer from "../../components/FooterPage";
import { Inter, Roboto, Alkatra, Roboto_Condensed } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "700"],
});

const alkatra = Alkatra({
  subsets: ["latin"],
  variable: "--font-alkatra",
  weight: "500",
});

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto_Condensed",
  weight: ["300", "400", "700"],
});
export const metadata = {
  title: "EcoAI",
  description: "Artificial Intelligence and Sustainability",
};

export default async function RootLayout({ children, params: {locale} }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${roboto.variable} ${alkatra.variable} ${roboto_Condensed.variable}`}
      >
        <NextTopLoader />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>
            {children}
            <div className="bg-neutral-900">
              <Footer />{" "}
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
