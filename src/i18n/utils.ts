import type { Lang } from "./ui";

export type { Lang };

type Namespace<T extends Record<string, string>> = Record<Lang, T>;

export function useTranslations<T extends Record<string, string>>(
  lang: Lang,
  namespace: Namespace<T>,
): (key: keyof T) => string {
  return (key) =>
    (namespace[lang][key] ?? namespace.en[key] ?? String(key)) as string;
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang === "nb") return "nb";
  return "en";
}

export function getLocalizedHref(href: string, lang: Lang): string {
  if (lang === "en") return href;
  if (href === "/") return "/nb";
  return `/nb${href}`;
}
