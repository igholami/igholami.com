import { Typography, Card, Badge } from 'antd'
import { news } from '../data/personalData'
import { useTheme } from '../contexts/ThemeContext'

const { Title, Text } = Typography

const NewsSection: React.FC = () => {
  const { isGeeky } = useTheme()
  
  // Sort news by date (most recent first)
  const sortedNews = [...news].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  // Helper function to format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  // Helper function to check if news is recent (within 3 months)
  const isRecent = (dateStr: string) => {
    const newsDate = new Date(dateStr)
    const threeMonthsAgo = new Date()
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
    return newsDate > threeMonthsAgo
  }
  
  return (
    <div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .news-content-geeky a {
            color: #4ade80 !important;
            text-decoration: underline;
            text-decoration-color: rgba(34, 197, 94, 0.7);
            transition: all 0.2s;
          }
          .news-content-geeky a:hover {
            color: #22c55e !important;
            text-decoration-color: #22c55e;
          }
          .news-content-normal a {
            color: #93c5fd !important;
            text-decoration: underline;
            text-decoration-color: rgba(147, 197, 253, 0.7);
            transition: all 0.2s;
          }
          .news-content-normal a:hover {
            color: #60a5fa !important;
            text-decoration-color: #60a5fa;
          }
        `
      }} />
      <Title level={2} className={`text-3xl font-semibold mb-2 ${
        isGeeky ? 'font-mono text-green-300' : 'font-normal text-blue-300'
      }`}>
        {isGeeky ? (
          <>
            <span className="text-green-400">&gt;</span> News<span className="text-green-400 animate-pulse">_</span>
          </>
        ) : (
          'Latest News'
        )}
      </Title>
      <Card className={`p-4 ${
        isGeeky 
          ? 'bg-black border-2 border-green-400 rounded-none shadow-lg shadow-green-400/20 font-mono relative' 
          : 'bg-black border-2 border-blue-400 rounded-lg'
      }`}>
        {isGeeky && (
          <div className="absolute top-2 right-2 text-green-400 text-xs opacity-60">
            // {sortedNews.length} updates
          </div>
        )}
        <div>
          {sortedNews.map((newsItem) => (
            <div 
              key={newsItem.id} 
              className={`pb-2 mb-2 last:pb-0 last:mb-0 transition-all duration-300 ${
                isGeeky 
                  ? 'border-l-2 border-green-400/30 hover:border-green-400 pl-3' 
                  : 'hover:bg-blue-400/5 p-2 rounded'
              }`}
            >
              {isGeeky ? (
                <div className="flex items-start justify-between gap-4">
                  <div 
                    className="flex-1 text-green-100 text-lg font-mono news-content-geeky"
                    dangerouslySetInnerHTML={{ __html: newsItem.title }}
                  />
                  <div className="flex items-center gap-2">
                    {isRecent(newsItem.date) && (
                      <Badge 
                        count="NEW" 
                        style={{ 
                          backgroundColor: '#22c55e', 
                          color: '#000',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          height: '22px',
                          lineHeight: '22px',
                          minWidth: '40px',
                          borderRadius: '11px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }} 
                      />
                    )}
                    <Text className="text-gray-300 text-base font-mono whitespace-nowrap">
                      {formatDate(newsItem.date)}
                    </Text>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div 
                    className="flex-1 text-blue-50 text-lg news-content-normal"
                    dangerouslySetInnerHTML={{ __html: newsItem.title }}
                  />
                  <div className="flex items-center gap-2">
                    {isRecent(newsItem.date) && (
                      <Badge 
                        count="NEW" 
                        style={{ 
                          backgroundColor: '#3b82f6', 
                          color: '#fff',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          height: '22px',
                          lineHeight: '22px',
                          minWidth: '40px',
                          borderRadius: '11px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }} 
                      />
                    )}
                    <Text className="text-blue-100 text-base whitespace-nowrap">
                      {formatDate(newsItem.date)}
                    </Text>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default NewsSection
