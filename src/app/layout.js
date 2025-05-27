import { Geist, Geist_Mono, Inter, Montserrat, Outfit, Ovo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit", subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const ovo = Ovo({
  variable: "--font-outfit", subsets: ["latin"],
  weight: ["400"]
})

const monteserrat = Montserrat({
  variable: "--font-monteserrat", subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const inter = Inter({
  variable: "--font-inter", subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Joses Portfolio",
  description: "Joses Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        ${geistSans.variable} ${geistMono.variable} 
        ${monteserrat.variable} ${inter.variable}
        ${outfit.variable} ${ovo.variable}
        `}>
        <div className="globalContainer">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
