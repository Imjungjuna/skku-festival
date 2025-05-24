import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/20 to-background">
        <div className="container flex flex-col items-center text-center z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            2024 성균관대학교 <span className="text-primary">대동제</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            5월 22일부터 24일까지, 성균관대학교 자연과학캠퍼스에서 펼쳐지는
            축제의 향연
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" asChild>
              <Link href="/schedule">축제 일정 보기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/artists">아티스트 라인업</Link>
            </Button>
          </div>
        </div>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            축제 D-Day
          </h2>
          <div className="flex justify-center gap-4">
            {["일", "시간", "분", "초"].map((unit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-background w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold shadow-sm">
                  {i === 0 ? "00" : i === 1 ? "00" : i === 2 ? "00" : "00"}
                </div>
                <span className="mt-2 text-sm">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Events Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-8 text-center">주요 행사</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z"></path>
                <path d="m3 3 18 18"></path>
                <path d="M10.5 10.5 8 13"></path>
                <path d="M13.5 10.5 16 13"></path>
                <path d="M10.5 13.5 8 11"></path>
                <path d="M13.5 13.5 16 11"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">공연</h3>
            <p className="text-muted-foreground mb-4">
              유명 아티스트들의 화려한 공연과 학내 동아리들의 다채로운 무대
            </p>
            <Button variant="outline" className="mt-auto" asChild>
              <Link href="/schedule">일정 보기</Link>
            </Button>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M4 11h16"></path>
                <path d="M12 11v8"></path>
                <path d="M6 19h12"></path>
                <path d="M10 7.236a3 3 0 1 1 4 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">부스</h3>
            <p className="text-muted-foreground mb-4">
              다양한 먹거리와 체험 활동이 가득한 학과 및 동아리 부스
            </p>
            <Button variant="outline" className="mt-auto" asChild>
              <Link href="/booths">부스 안내</Link>
            </Button>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 2v8"></path>
                <path d="m4.93 10.93 1.41 1.41"></path>
                <path d="M2 18h2"></path>
                <path d="M20 18h2"></path>
                <path d="m19.07 10.93-1.41 1.41"></path>
                <path d="M22 22H2"></path>
                <path d="M16 6 8 14"></path>
                <path d="m16 14-8-8"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">이벤트</h3>
            <p className="text-muted-foreground mb-4">
              경품 추첨, 게임, 체험 등 다양한 이벤트 참여 기회
            </p>
            <Button variant="outline" className="mt-auto" asChild>
              <Link href="/events">이벤트 보기</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            아티스트 라인업
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((artist) => (
              <div
                key={artist}
                className="group relative overflow-hidden rounded-lg aspect-square bg-black"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold">아티스트 {artist}</h3>
                    <p className="text-sm opacity-80">
                      5월 {20 + artist}일 공연
                    </p>
                  </div>
                </div>
                <div className="h-full w-full flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">아티스트 이미지</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/artists">전체 라인업 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-8 text-center">축제 지도</h2>
        <div className="aspect-[16/9] bg-background rounded-lg flex items-center justify-center border">
          <p className="text-muted-foreground">
            축제 지도 이미지가 들어갈 자리입니다
          </p>
        </div>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/map">상세 지도 보기</Link>
          </Button>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">공지사항</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-4 border rounded-lg bg-background hover:bg-muted/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">2024 대동제 안내사항 #{item}</h3>
                  <span className="text-sm text-muted-foreground">
                    2024.05.{10 + item}
                  </span>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  축제 기간 중 주요 안내사항입니다. 자세한 내용은 클릭하여
                  확인해주세요.
                </p>
              </div>
            ))}
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/notices">공지사항 더보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container">
        <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">함께 만들어가는 축제</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            성균관대학교 대동제에 참여하고 싶으신가요? 부스 신청, 공연 참가,
            자원봉사 등 다양한 방법으로 함께할 수 있습니다.
          </p>
          <Button size="lg" asChild>
            <Link href="/participate">참여 신청하기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
