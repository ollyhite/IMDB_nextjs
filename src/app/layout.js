"use client";
import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";

export default function RootLayout({ children }) {
  return (
    //suppressHydrationWarning fix "extra attributes from the server" error?
    <html lang="en" suppressHydrationWarning>
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
