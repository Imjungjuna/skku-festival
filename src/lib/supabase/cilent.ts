// src/lib/supabase/client.ts

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // NEXT_PUBLIC_으로 시작하는 환경 변수는 브라우저에 노출되어도 안전합니다.
  // Supabase URL과 Anon Key는 민감 정보가 아니며, RLS(Row Level Security) 정책으로 데이터를 보호합니다.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
