import {Geist, Geist_Mono} from "next/font/google"

import "@workspace/ui/globals.css"
import {Providers} from "@/components/providers"
import AppSidebar from "@/components/sidebar/app-sidebar";
import {SidebarTrigger} from "@workspace/ui/components/sidebar";

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
})

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        >
        <Providers>
            <AppSidebar/>
            <main>
                <SidebarTrigger/>
                {children}
            </main>
        </Providers>
        </body>
        </html>
    )
}
