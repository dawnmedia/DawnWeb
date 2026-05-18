import { describe, expect, it } from "vitest";

import {
  getLocaleFromCountry,
  getLocalePreferenceFromCookieHeader,
} from "../src/utils/locale";

describe("getLocaleFromCountry", () => {
  it.each([
    ["BR", "br"],
    ["JP", "ja"],
    ["KR", "ko"],
    ["MX", "es"],
    ["ES", "es"],
    ["AR", "es"],
    ["FR", "fr"],
    ["US", "en"],
    ["DE", "en"],
    [undefined, "en"],
  ] as const)("maps %s to %s", (countryCode, expectedLocale) => {
    expect(getLocaleFromCountry(countryCode)).toBe(expectedLocale);
  });

  it("normalizes lowercase country codes", () => {
    expect(getLocaleFromCountry("br")).toBe("br");
  });
});

describe("getLocalePreferenceFromCookieHeader", () => {
  it("reads a valid remembered locale", () => {
    expect(getLocalePreferenceFromCookieHeader("foo=bar; dawn_locale=ko")).toBe(
      "ko",
    );
  });

  it("ignores invalid remembered locales", () => {
    expect(
      getLocalePreferenceFromCookieHeader("dawn_locale=de"),
    ).toBeUndefined();
  });
});
