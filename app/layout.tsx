import type { Metadata } from "next";
import "./globals.css";
import Lang from "../components/Lang";

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "comm4nd3r portfolio website!",
  icons: "/globe.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <Lang/>
      </body>
    </html>
  );
}
