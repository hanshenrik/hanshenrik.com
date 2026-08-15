import type { Lang } from "./ui";

export type { Lang };

export function useTranslations<
  N extends { en: Record<string, string>; nb: Record<string, string> },
>(lang: Lang, namespace: N): (key: keyof N["nb"]) => string {
  return (key) =>
    (namespace[lang][key] ?? namespace.nb[key] ?? String(key)) as string;
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang === "en") return "en";
  return "nb";
}

export function getLocalizedHref(href: string, lang: Lang): string {
  if (lang === "nb") return href;
  if (href === "/") return "/en";
  return `/en${href}`;
}
