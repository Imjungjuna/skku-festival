// src/components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2024 성균관대학교 대동제
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline underline-offset-4">
              소개
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              문의하기
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              개인정보처리방침
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>
            제작:{" "}
            <a
              href="https://github.com/CoMit"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              CoMit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}