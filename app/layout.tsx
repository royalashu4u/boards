import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.className}`}>
      <body className="antialiased" suppressHydrationWarning={true}>
        <ConvexClientProvider>
          <Providers>
            <Toaster />
            <ModalProvider />
            {children}
          </Providers>
        </ConvexClientProvider>
      </body>
    </html>
  );
}