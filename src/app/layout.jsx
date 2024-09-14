import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeList",
  description: "Website Anime with Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"${gabarito.className} bg-color-secondary"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}