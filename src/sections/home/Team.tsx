import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const founder = {
  name: 'Achyuth Yadav',
  role: 'Founder',
  image:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
};

const teamMembers = [
  {
    id: 'member-1',
    name: 'Team Member 1',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-2',
    name: 'Team Member 2',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-3',
    name: 'Team Member 3',
    image:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-4',
    name: 'Team Member 4',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-5',
    name: 'Team Member 5',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-6',
    name: 'Team Member 6',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-7',
    name: 'Team Member 7',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-8',
    name: 'Team Member 8',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'member-9',
    name: 'Team Member 9',
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80',
  },
];

export function Team() {
  const { t } = useTranslation();
  const [showAllMembers, setShowAllMembers] = useState(false);
  const visibleMembers = showAllMembers ? teamMembers : teamMembers.slice(0, 6);

  return (
    <section id="team" className="team-section">
      <div className="team-inner">
        <div className="team-heading">
          <h2>{t('team.title')}</h2>
          <p>{t('team.description')}</p>
        </div>

        <article className="team-profile">
          <div className="team-profile-media">
            <img src={founder.image} alt={founder.name} />
          </div>
          <div className="team-profile-content">
            <h3>{founder.name}</h3>
            <p className="team-profile-role">{founder.role}</p>
          </div>
        </article>

        <h2 className="team-members-heading">{t('team.membersTitle')}</h2>
        <div className="team-grid">
          {visibleMembers.map(({ id, name, image }) => (
            <article className="team-card" key={id}>
              <div className="team-media">
                <img src={image} alt={name} loading="lazy" />
              </div>
              <div className="team-meta">
                <h3>{name}</h3>
                <p>{t('team.memberDescription')}</p>
              </div>
            </article>
          ))}
        </div>
        {teamMembers.length > 6 && (
          <div className="team-more">
            <button
              className="team-more-button"
              type="button"
              aria-expanded={showAllMembers}
              onClick={() => setShowAllMembers((showing) => !showing)}
            >
              {showAllMembers ? t('team.showLess') : t('team.showMore')}
              <span aria-hidden="true">{showAllMembers ? '−' : '+'}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
