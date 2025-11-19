import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

const authRoutes = ["/login", "/register", "/auth-verify"];
const secureRoutes = ["/profile", "profile/edit", "/dashboard"];

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && authRoutes.some((e) => request.nextUrl.pathname.startsWith(e)))
    return supabaseResponse;

  if (user && authRoutes.some((e) => request.nextUrl.pathname.startsWith(e)))
    return NextResponse.redirect(new URL("/account", request.url));

  if (
    !user &&
    secureRoutes.some((e) => request.nextUrl.pathname.startsWith(e))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return supabaseResponse;
}
