import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "DEVLANCHES",
  description: "Acreditamos que a comida vai além de um simples prato",
  icons: "/favicon.png",
  openGraph: {
    title: "DEVLANCHES",
    description: "Acreditamos que a comida vai além de um simples prato",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
