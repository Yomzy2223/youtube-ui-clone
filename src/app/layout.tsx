import AppHeader from "@/features/header/mainHeader";
import Sidebar from "@/features/sidebar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youtube ui clone",
  description: "Share your videos with friends, family, and the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          roboto.className,
          "max-w-[100vw] h-screen overflow-x-hidden"
        )}
      >
        <AppHeader />
        <div className="flex flex-col h-[calc(100vh-56px)]">{children}</div>
      </body>
    </html>
  );
}
