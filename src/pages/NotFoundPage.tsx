import { Button, Container } from '@/components/ui';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section
      style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}
    >
      <Container>
        <h1>404</h1>
        <p>{t('notFound.description')}</p>
        <Button href="/">{t('notFound.home')}</Button>
      </Container>
    </section>
  );
}
