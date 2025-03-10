'use client';
import { NextIntlClientProvider } from 'next-intl';

export function Providers({ children, locale, messages }:any) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}