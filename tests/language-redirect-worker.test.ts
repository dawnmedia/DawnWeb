import { afterEach, describe, expect, it, vi } from "vitest";

import {
  getCountryCodeFromRequest,
  handleLanguageRedirectRequest,
} from "../workers/language-redirect";

afterEach(() => {
  vi.restoreAllMocks();
});

function requestWithHeaders(path: string, headers: HeadersInit = {}): Request {
  return new Request(`https://dawnwebs.com${path}`, { headers });
}

async function expectRedirect(
  request: Request,
  expectedLocation: string,
): Promise<void> {
  const response = await handleLanguageRedirectRequest(request);

  expect(response.status).toBe(302);
  expect(response.headers.get("Location")).toBe(expectedLocation);
  expect(response.headers.get("Cache-Control")).toBe("private, no-store");
  expect(response.headers.get("Vary")).toBe("Cookie, CF-IPCountry");
}

describe("language redirect Worker", () => {
  it("redirects root visitors from Brazil to Portuguese", async () => {
    await expectRedirect(
      requestWithHeaders("/", { "CF-IPCountry": "BR" }),
      "https://dawnwebs.com/br/",
    );
  });

  it("redirects root visitors from Japan to Japanese", async () => {
    await expectRedirect(
      requestWithHeaders("/", { "CF-IPCountry": "JP" }),
      "https://dawnwebs.com/ja/",
    );
  });

  it("preserves query params on redirects", async () => {
    await expectRedirect(
      requestWithHeaders("/?utm_source=test", { "CF-IPCountry": "AR" }),
      "https://dawnwebs.com/es/?utm_source=test",
    );
  });

  it("passes unsupported countries through to the English root", async () => {
    const originResponse = new Response("English root");
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(originResponse);
    const request = requestWithHeaders("/", { "CF-IPCountry": "US" });

    const response = await handleLanguageRedirectRequest(request);

    expect(response).toBe(originResponse);
    expect(fetchMock).toHaveBeenCalledWith(request);
  });

  it("does not auto-redirect non-root English pages", async () => {
    const originResponse = new Response("Products");
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(originResponse);
    const request = requestWithHeaders("/products", { "CF-IPCountry": "BR" });

    const response = await handleLanguageRedirectRequest(request);

    expect(response).toBe(originResponse);
    expect(fetchMock).toHaveBeenCalledWith(request);
  });

  it("lets a remembered Korean preference override country", async () => {
    await expectRedirect(
      requestWithHeaders("/", {
        Cookie: "dawn_locale=ko",
        "CF-IPCountry": "US",
      }),
      "https://dawnwebs.com/ko/",
    );
  });

  it("lets a remembered English preference prevent geo redirects", async () => {
    const originResponse = new Response("English root");
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(originResponse);
    const request = requestWithHeaders("/", {
      Cookie: "dawn_locale=en",
      "CF-IPCountry": "BR",
    });

    const response = await handleLanguageRedirectRequest(request);

    expect(response).toBe(originResponse);
    expect(fetchMock).toHaveBeenCalledWith(request);
  });

  it("falls back to country detection for invalid locale cookies", async () => {
    await expectRedirect(
      requestWithHeaders("/", {
        Cookie: "dawn_locale=de",
        "CF-IPCountry": "BR",
      }),
      "https://dawnwebs.com/br/",
    );
  });

  it("prefers request.cf.country when Cloudflare provides it", () => {
    const request = requestWithHeaders("/", { "CF-IPCountry": "US" });
    Object.defineProperty(request, "cf", {
      value: { country: "JP" },
    });

    expect(getCountryCodeFromRequest(request)).toBe("JP");
  });
});
