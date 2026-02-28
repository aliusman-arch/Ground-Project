import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { LenisProvider } from "~/components/shared/lenis-provider";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Local Grounds Booking System",
  description: "SaaS booking platform for local sports ground owners.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <LenisProvider>
          <TRPCReactProvider>
            <main className="min-h-dvh w-full text-zinc-900">
              {children}
            </main>
          </TRPCReactProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
