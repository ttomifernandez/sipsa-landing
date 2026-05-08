import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIPSA - Prepaga de Salud Córdoba",
  description: "Planes integrales de prepaga de salud en Córdoba. Cobertura confiable, profesionales expertos, atención 24/7.",
  keywords: "prepaga, salud, Córdoba, planes médicos, cobertura",
  authors: [{ name: "SIPSA" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
