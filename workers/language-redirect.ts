/// <reference types="@cloudflare/workers-types" />

import {
  DEFAULT_LOCALE,
  getLocaleFromCountry,
  getLocalePreferenceFromCookieHeader,
  localizePath,
  type Locale,
} from "../src/utils/locale";

type GeoRequest = Request & {
  cf?: {
    country?: string | null;
  };
};

const REDIRECT_HEADERS = {
  "Cache-Control": "private, no-store",
  Vary: "Cookie, CF-IPCountry",
};

export function getCountryCodeFromRequest(
  request: Request,
): string | undefined {
  const cfCountry = (request as GeoRequest).cf?.country;

  return cfCountry ?? request.headers.get("CF-IPCountry") ?? undefined;
}

export function getRedirectLocaleForRequest(request: Request): Locale {
  return (
    getLocalePreferenceFromCookieHeader(request.headers.get("Cookie")) ??
    getLocaleFromCountry(getCountryCodeFromRequest(request))
  );
}

export function getLanguageRedirectUrl(request: Request): URL | undefined {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return undefined;
  }

  const url = new URL(request.url);

  if (url.pathname !== "/") {
    return undefined;
  }

  const locale = getRedirectLocaleForRequest(request);

  if (locale === DEFAULT_LOCALE) {
    return undefined;
  }

  const redirectUrl = new URL(request.url);
  redirectUrl.pathname = `${localizePath("/", locale)}/`;

  return redirectUrl;
}

function createRedirectResponse(url: URL): Response {
  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      ...REDIRECT_HEADERS,
    },
  });
}

export async function handleLanguageRedirectRequest(
  request: Request,
): Promise<Response> {
  const redirectUrl = getLanguageRedirectUrl(request);

  if (redirectUrl) {
    return createRedirectResponse(redirectUrl);
  }

  return fetch(request);
}

export default {
  fetch: handleLanguageRedirectRequest,
} satisfies ExportedHandler;
