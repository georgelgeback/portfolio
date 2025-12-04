import { type NextRequest, NextResponse } from "next/server";

function handleLanguageHeader(response: NextResponse, request: NextRequest) {
  const language = request.cookies.get("i18next")?.value || "en";

  response.headers.set("x-initial-language", language);
}

export function proxy(request: NextRequest) {
  // Default: continue with language header
  const response = NextResponse.next();
  handleLanguageHeader(response, request);
  return response;
}

export const config = {
  // Avoid running middleware on API routes, static files, and images
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|locales|flags|images).*)",
  ],
};
