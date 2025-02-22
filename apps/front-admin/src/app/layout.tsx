import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import "./globals.css";
import { Providers } from "@/providers/providers";
import AdminSidebar from "@/components/sidebar/admin-sidebar";
import { PublicEnvScript } from "next-runtime-env";
import TopBar from "@/components/top-bar";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PublicEnvScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <SidebarTrigger className={"md:hidden"} />
          <AdminSidebar />
          <main className={"relative w-full"}>
            <TopBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
