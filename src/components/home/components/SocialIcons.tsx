import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { socialLinks } from '../../../data/personalData'
import type { SocialLink } from '../../../types'
import { useTheme } from '../../../contexts/ThemeContext'

const iconMap = {
  email: faEnvelope,
  github: faGithub,
  scholar: 'academicon' as const,
  linkedin: faLinkedin,
  dblp: 'academicon' as const,
  cv: faFileAlt
}

interface SocialIconsProps {
  justify?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ justify = 'flex-start' }) => {
  const { isGeeky } = useTheme()
  
  const renderIcon = (type: SocialLink['type']) => {
    if (type === 'scholar') {
      return <i className={`ai ai-google-scholar text-2xl ${
        isGeeky ? 'text-green-400' : 'text-blue-400'
      }`}></i>
    }
    if (type === 'dblp') {
      return <i className={`ai ai-dblp text-2xl ${
        isGeeky ? 'text-green-400' : 'text-blue-400'
      }`}></i>
    }
    if (type === 'cv') {
      return <i className={`ai ai-cv text-2xl ${
        isGeeky ? 'text-green-400' : 'text-blue-400'
      }`}></i>
    }
    return <FontAwesomeIcon icon={iconMap[type]} className={`text-2xl ${
      isGeeky ? 'text-green-400' : 'text-blue-400'
    }`} />
  }

  return (
    <div className={`flex flex-wrap gap-6`} style={{ justifyContent: justify }}>
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target={link.type === 'email' ? undefined : '_blank'}
          rel={link.type === 'email' ? undefined : 'noopener noreferrer'}
          className="inline-flex items-center justify-center text-2xl transition-colors duration-300 no-underline"
          style={{ color: '#9ca3af' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = isGeeky ? '#4ade80' : '#60a5fa'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9ca3af'
          }}
        >
          {renderIcon(link.type)}
        </a>
      ))}
    </div>
  )
}

export default SocialIcons