import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB Clone Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
