'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const name = 'User';

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-lg mb-4">
          {t('description')}
        </p>
        <p className="text-xl mb-6">
          {t('greeting', { name })}
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            {t('about.company')}
          </h2>
          <p>
            {t('about.description')}
          </p>
        </div>

        <Link
          href="/"
          locale={locale === 'en' ? 'es' : 'en'}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {t('switchLanguage')}
        </Link>
      </div>
    </main>
  );
}