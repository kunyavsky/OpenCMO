import { createContext, useState, useCallback, type ReactNode } from "react";
import { en, type TranslationKey } from "./locales/en";
import { zh } from "./locales/zh";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { es } from "./locales/es";

export type Locale = "en" | "zh" | "ja" | "ko" | "es";

const dictionaries: Record<Locale, Partial<Record<TranslationKey, string>>> = { en, zh, ja, ko, es };

function getInitialLocale(): Locale {
  const stored = localStorage.getItem("opencmo_lang");
  if (stored && stored in dictionaries) return stored as Locale;
  const lang = navigator.language;
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("ja")) return "ja";
  if (lang.startsWith("ko")) return "ko";
  if (lang.startsWith("es")) return "es";
  return "en";
}

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("opencmo_lang", l);
  }, []);

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) => {
      let text = dictionaries[locale][key] ?? en[key];
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replaceAll(`{{${k}}}`, String(v));
        }
      }
      return text;
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
