// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 예시 폰트
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "성균관대학교 축제",
  description: "성균관대학교 축제의 모든 것을 한눈에!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ThemeProvider로 감싸서 다크/라이트 모드를 지원합니다. */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
