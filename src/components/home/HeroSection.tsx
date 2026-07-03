import { personalInfo, socialLinks } from '../../data/personalData'

const HeroSection: React.FC = () => {
  return (
    <header style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <img
        src={personalInfo.profileImage}
        alt={personalInfo.name}
        style={{
          width: '160px',
          height: '160px',
          objectFit: 'cover',
          borderRadius: '8px',
          flexShrink: 0
        }}
      />
      <div style={{ flex: '1 1 300px' }}>
        <h1 style={{ margin: '0 0 4px 0', fontSize: '1.75rem' }}>{personalInfo.name}</h1>
        <div style={{ color: '#a8a29e', marginBottom: '0.75rem' }}>{personalInfo.title}</div>
        <p style={{ margin: '0.4rem 0' }}>{personalInfo.bio}</p>
        <p style={{ margin: '0.4rem 0' }}>{personalInfo.researchFocus}</p>
        <div style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
          {socialLinks.map((link, idx) => (
            <span key={link.name}>
              <a
                href={link.url}
                target={link.type === 'email' ? undefined : '_blank'}
                rel={link.type === 'email' ? undefined : 'noopener noreferrer'}
              >
                {link.name}
              </a>
              {idx < socialLinks.length - 1 && <span style={{ color: '#666' }}> · </span>}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default HeroSection
