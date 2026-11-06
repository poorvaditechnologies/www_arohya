import { useTranslation } from 'react-i18next';
import { SplitText } from '@/components/animations';
import { Icon } from '@/components/ui';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section
      className="container"
      style={{
        minHeight: '75vh',
        display: 'grid',
        alignContent: 'center',
        justifyItems: 'start',
        gap: '1.5rem',
        paddingBlock: '6rem',
      }}
    >
      <span className="eyebrow">Error 404</span>
      <SplitText as="h1" immediate className="display" text="Page not found." />
      <p className="lead">{t('notFound.description')}</p>
      <a href="/" className="btn btn-primary">
        {t('notFound.home')}
        <span className="btn-arrow">
          <Icon name="arrow" size={14} />
        </span>
      </a>
    </section>
  );
}
