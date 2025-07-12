import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Rumaya Café",
  description: "Café artesanal, recién tostado y promociones exclusivas. Descubre el mejor café en Rumaya Café.",
  keywords: [
    "café",
    "artesanal",
    "tostado",
    "promociones",
    "espresso",
    "envío gratis",
    "Rumaya Café"
  ],
  authors: [{ name: "Team 3" }],
  creator: "Team 3",
  openGraph: {
    title: "Rumaya Café",
    description: "Café artesanal, recién tostado y promociones exclusivas.",
    url: "https://rumayacafe.com",
    siteName: "Rumaya Café",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rumaya Café"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  metadataBase: new URL("https://rumayacafe.com")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="var(--primary)"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="var(--primary), var(--chart-5)"
          />
          <Navbar />
          <main>
            {children}
          </main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}