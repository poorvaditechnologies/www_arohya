import { useTranslation } from 'react-i18next';

export function WhatsAppFab() {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/918162200000"
      className="fab-whatsapp"
      aria-label={t('whatsapp.ariaLabel')}
      style={{
        position: 'fixed',
        bottom: 26,
        right: 26,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#10B981',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 28px rgba(16,185,129,0.45)',
        zIndex: 90,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.3z"></path>
      </svg>
    </a>
  );
}
