import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import MuiProvider from "@/providers/MuiProvider";
import "@/styles/global.scss";
import "@/styles/_tailwind.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realtime Colors",
  description: "Visualize your colors and fonts on a real website.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <MuiProvider>
            {children}
          </MuiProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
