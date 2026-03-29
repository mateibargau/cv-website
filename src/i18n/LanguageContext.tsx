"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { dictionaries, type Locale, type Dictionary } from ".";

type LanguageContextType = {
  locale: Locale;
  t: Dictionary;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>(null!);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const toggle = useCallback(
    () => setLocale((l) => (l === "en" ? "ro" : "en")),
    []
  );
  const t = dictionaries[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
