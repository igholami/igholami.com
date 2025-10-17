import { Typography, Card, Badge } from 'antd'
import { Link } from 'react-router-dom'
import { publications } from '../data/personalData'
import { useTheme } from '../contexts/ThemeContext'
import { MathRenderer } from './common'

const { Title } = Typography

const PublicationsSection: React.FC = () => {
  // Sort publications by order field
  const sortedPublications = [...publications].sort((a, b) => b.order - a.order)
  const { isGeeky } = useTheme()

  // Helper function to get badge info
  const getBadgeInfo = (badge?: 'best-paper' | 'special-issue') => {
    if (!badge) return null
    
    switch (badge) {
      case 'best-paper':
        return {
          text: 'BEST PAPER',
          color: isGeeky ? '#dc2626' : '#ef4444', // red colors for awards
          textColor: '#fff'
        }
      case 'special-issue':
        return {
          text: 'SPECIAL ISSUE',
          color: isGeeky ? '#a855f7' : '#8b5cf6', // purple colors
          textColor: '#fff'
        }
      default:
        return null
    }
  }

  return (
    <div>
      <Title level={2} className={`text-3xl font-semibold mb-2 ${
        isGeeky ? 'font-mono text-green-300' : 'font-normal text-blue-300'
      }`}>
        {isGeeky ? (
          <>
            <span className="text-green-400">&gt;</span> Publications<span className="text-green-400 animate-pulse">_</span>
          </>
        ) : (
          'Publications'
        )}
      </Title>
      <Card className={`p-4 ${
        isGeeky 
          ? 'bg-black border-2 border-green-400 rounded-none shadow-lg shadow-green-400/20 font-mono relative' 
          : 'bg-black border-2 border-blue-400 rounded-lg'
      }`}>
        {isGeeky && (
          <div className="absolute top-2 right-2 text-green-400 text-xs opacity-60">
            // {publications.length} items
          </div>
        )}
        <div>
          {sortedPublications.map((publication) => (
            <div 
              key={publication.id} 
              className={`pb-2 mb-2 last:pb-0 last:mb-0 transition-all duration-300 ${
                isGeeky 
                  ? 'border-l-2 border-green-400/30 hover:border-green-400 pl-3' 
                  : 'hover:bg-blue-400/5 p-2 rounded'
              }`}
            >
              {isGeeky ? (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Title 
                      level={3} 
                      className="m-0 mb-2 font-mono"
                    >
                      <Link 
                        to={`/publication/${publication.slug}`}
                        className="no-underline transition-colors duration-300 hover:underline"
                        style={{ color: '#4ade80' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#4ade80'}
                      >
                        {<MathRenderer>{publication.title}</MathRenderer>}
                      </Link>
                    </Title>
                    <div className="text-gray-300 text-lg font-mono">
                      {publication.venues.map((v) => (
                        <div key={v}>
                          <span className="text-green-400">@</span>{v}
                        </div>
                      ))}
                    </div>
                  </div>
                  {getBadgeInfo(publication.badge) && (
                    <Badge 
                      count={getBadgeInfo(publication.badge)!.text}
                      style={{ 
                        backgroundColor: getBadgeInfo(publication.badge)!.color,
                        color: getBadgeInfo(publication.badge)!.textColor,
                        fontSize: '11px',
                        fontWeight: 'bold',
                        height: '24px',
                        lineHeight: '24px',
                        minWidth: '80px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }} 
                    />
                  )}
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Title 
                      level={3} 
                      className="m-0 mb-1"
                    >
                      <Link 
                        to={`/publication/${publication.slug}`}
                        className="no-underline transition-colors duration-300 hover:underline"
                        style={{ color: '#93c5fd' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#93c5fd'}
                      >
                        {<MathRenderer>{publication.title}</MathRenderer>}
                      </Link>
                    </Title>
                    <div className="text-blue-100 text-lg">
                      {publication.venues.map((v) => (
                        <div key={v}>{v}</div>
                      ))}
                    </div>
                  </div>
                  {getBadgeInfo(publication.badge) && (
                    <Badge 
                      count={getBadgeInfo(publication.badge)!.text}
                      style={{ 
                        backgroundColor: getBadgeInfo(publication.badge)!.color,
                        color: getBadgeInfo(publication.badge)!.textColor,
                        fontSize: '11px',
                        fontWeight: 'bold',
                        height: '24px',
                        lineHeight: '24px',
                        minWidth: '80px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }} 
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default PublicationsSection