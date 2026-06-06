// app/layout.js
import { Suspense } from "react";
import "./globals.css";
import LangProvider from "../components/LangProvider";

export const metadata = {
  title: "Amir | Full-Stack Developer Portfolio",
  description: "Personal portfolio of Amir (comm4nd3r) — Full-Stack Developer specializing in web applications, game development, and modern tech solutions.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F0E8" },
    { media: "(prefers-color-scheme: dark)", color: "#2C2825" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">
        <Suspense>
          <LangProvider>{children}</LangProvider>
        </Suspense>
      </body>
    </html>
  );
}