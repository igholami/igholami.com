import { Typography, Card } from 'antd'
import { awards } from '../data/personalData'
import { useTheme } from '../contexts/ThemeContext'

const { Title, Text } = Typography

const AwardsSection: React.FC = () => {
  const { isGeeky } = useTheme()
  
  return (
    <div>
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
          {awards.map((award, index) => (
            <div 
              key={index} 
              className={`pb-2 mb-2 last:pb-0 last:mb-0 transition-all duration-300 ${
                isGeeky 
                  ? 'border-l-2 border-green-400/30 pl-3 hover:border-green-400' 
                  : 'hover:bg-blue-400/5 p-2 rounded'
              }`}
            >
              {isGeeky ? (
                <div className="flex items-start gap-2">
                  <Text className="text-green-200 text-base font-mono flex-1">
                    <span className="text-green-400">★</span> {award}
                  </Text>
                </div>
              ) : (
                <Text className="text-blue-100 text-base">
                  {award}
                </Text>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default AwardsSection