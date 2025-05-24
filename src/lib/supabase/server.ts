// src/lib/supabase/server.ts

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // 컴파일러의 제안에 따라 모든 메서드를 async로 변경합니다.
        async get(name: string) {
          // await를 사용하여 cookies() Promise가 완료되기를 기다립니다.
          return (await cookies()).get(name)?.value;
        },
        async set(name: string, value: string, options: CookieOptions) {
          try {
            const cookieStore = await cookies();
            // 이 코드는 서버 컴포넌트에서 실행되면 'read-only' 오류를 발생시킵니다.
            // 이것은 의도된 동작이며, try...catch 블록이 오류를 처리합니다.
            // 실제 쿠키 설정은 middleware.ts에서 이루어집니다.
            // @ts-ignore
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // 서버 컴포넌트에서 쿠키를 수정하려고 할 때 발생하는 오류는 무시합니다.
          }
        },
        async remove(name: string, options: CookieOptions) {
          try {
            const cookieStore = await cookies();
            // 위와 동일하게, 이 코드도 서버 컴포넌트에서는 의도적으로 오류를 발생시킵니다.
            // @ts-ignore
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // 서버 컴포넌트에서 쿠키를 수정하려고 할 때 발생하는 오류는 무시합니다.
          }
        },
      },
    }
  );
}
