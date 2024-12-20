import type { Metadata } from "next";
import {
  Abhaya_Libre,
  Chenla,
  Noto_Sans,
  Telex,
  DM_Serif_Text,
  Plus_Jakarta_Sans,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "BRM AGRO",
  description: "Shaping the future of Cambodian rice excellence",
  icons: {
    icon: [
      {
        type: "image/svg+xml",
        url: "/favicon.svg",
      },
    ],
  },
};

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-abhaya",
});

const chenla = Chenla({
  subsets: ["khmer"],
  weight: ["400"],
  variable: "--font-chenla",
});

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto_sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const telex = Telex({
  subsets: ["latin"],
  variable: "--font-telex",
  weight: ["400"],
});

const sarif = DM_Serif_Text({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sarif",
  weight: ["400"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${abhaya.variable} ${montserrat.variable} ${chenla.variable} ${noto_sans.variable} ${telex.variable} ${sarif.variable} ${jakarta.variable} relative antialiased`}
      >
        <Header />
        <main className="static">{children}</main>
        <Footer />
        <Toaster
          toastOptions={{
            duration: 3000,
            className: "bg-brand-blue border-0 text-white",
          }}
        />
      </body>
    </html>
  );
}
