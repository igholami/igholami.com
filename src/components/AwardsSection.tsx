import { Typography, Card } from 'antd'
import { awards } from '../data/personalData'
import { useTheme } from '../contexts/ThemeContext'

const { Title, Text } = Typography

const AwardsSection: React.FC = () => {
  const { isGeeky } = useTheme()
  
  // Helper function to parse award string and extract title and date
  const parseAward = (award: string) => {
    // First try to match with parentheses (handles HTML tags)
    const match = award.match(/^(.+?)\s*\((\d{4})\)(.*)$/)
    if (match) {
      const title = (match[1] + (match[3] || '')).trim()
      return { title, date: match[2] }
    }
    // If no year in parentheses, check for year at the end (handles HTML tags)
    const yearMatch = award.match(/^(.+?)\s+(\d{4})(.*)$/)
    if (yearMatch) {
      const title = (yearMatch[1] + (yearMatch[3] || '')).trim()
      return { title, date: yearMatch[2] }
    }
    return { title: award, date: null }
  }
  
  return (
    <div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .awards-content-geeky strong {
            font-weight: bold;
          }
          .awards-content-normal strong {
            font-weight: bold;
          }
        `
      }} />
      <Title level={2} className={`text-3xl font-semibold mb-2 ${
        isGeeky ? 'font-mono text-green-300' : 'font-normal text-blue-300'
      }`}>
        {isGeeky ? (
          <>
            <span className="text-green-400">&gt;</span> Awards<span className="text-green-400 animate-pulse">_</span>
          </>
        ) : (
          'Awards & Recognition'
        )}
      </Title>
      <Card className={`p-4 ${
        isGeeky 
          ? 'bg-black border-2 border-green-400 rounded-none shadow-lg shadow-green-400/20 font-mono relative' 
          : 'bg-black border-2 border-blue-400 rounded-lg'
      }`}>
        {isGeeky && (
          <div className="absolute top-2 right-2 text-green-400 text-xs opacity-60">
            // {awards.length} achievements
          </div>
        )}
        <div>
          {awards.map((award, index) => {
            const { title, date } = parseAward(award)
            return (
              <div 
                key={index} 
                className={`pb-2 mb-2 last:pb-0 last:mb-0 transition-all duration-300 ${
                  isGeeky 
                    ? 'border-l-2 border-green-400/30 pl-3 hover:border-green-400' 
                    : 'hover:bg-blue-400/5 p-2 rounded'
                }`}
              >
                {isGeeky ? (
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-green-100 text-lg font-mono flex-1 awards-content-geeky">
                      <span className="text-green-400">★</span> 
                      <span 
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                    </div>
                    {date && (
                      <Text className="text-gray-300 text-base font-mono whitespace-nowrap">
                        {date}
                      </Text>
                    )}
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-4">
                    <div 
                      className="text-blue-50 text-lg flex-1 awards-content-normal"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {date && (
                      <Text className="text-blue-200 text-base whitespace-nowrap">
                        {date}
                      </Text>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default AwardsSection