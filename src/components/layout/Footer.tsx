export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          만든 사람:{" "}
          <a
            href="https://github.com/your-github-id" // 본인 깃허브 주소로 변경
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            [이름 또는 닉네임]
          </a>
          . 이 프로젝트는 오픈 소스입니다.
        </p>
      </div>
    </footer>
  );
}
