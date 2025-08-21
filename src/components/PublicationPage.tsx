import { Typography, Button, Card, Layout } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { publications } from '../data/personalData'
import { Container } from './common'
import { useTheme } from '../contexts/ThemeContext'

const { Title, Text } = Typography
const { Content } = Layout

const PublicationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { isGeeky } = useTheme()
  
  const publication = publications.find(pub => pub.slug === slug)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  
  if (!publication) {
    // Let the general 404 page handle this
    navigate('/404', { replace: true })
    return null
  }

  return (
    <Layout className="dark-layout">
      <Content className="py-10 flex flex-col items-center">
        <Container className="flex flex-col space-y-8">
          {/* Navigation */}
          <Button 
            type="text" 
            icon={<ArrowLeftOutlined />} 
            onClick={() => navigate('/')}
            className={`self-start px-2 py-1 mb-5 transition-colors duration-300 ${
              isGeeky 
                ? 'font-mono text-green-300 hover:text-green-200 hover:bg-green-400/10 border border-green-400/30' 
                : 'text-blue-300 hover:text-blue-200 hover:bg-blue-400/10'
            }`}
          >
            {isGeeky ? (
              <>
                <span className="text-green-400">cd</span> ../
              </>
            ) : (
              'Back to Home'
            )}
          </Button>

          {/* Publication Header */}
          <div className={`p-4 relative ${
            isGeeky 
              ? 'bg-black/50 border-2 border-green-400/30' 
              : 'bg-black/30 rounded-lg'
          }`}>
            {isGeeky && (
              <div className="absolute top-2 left-2 text-green-400 text-xs font-mono opacity-60">
                // publication.h
              </div>
            )}
                         <Title level={1} className={`my-2 text-4xl ${
              isGeeky ? 'font-mono text-green-300' : 'font-normal text-blue-300'
            }`}>
              {isGeeky && <span className="text-green-400">&gt;</span>} {publication.title}
            </Title>
            <div className={`flex items-center space-x-2 mb-4 ${
              isGeeky ? 'font-mono' : 'font-normal'
            }`}>
              <Text strong className={`text-base ${
                isGeeky ? 'text-green-200' : 'text-blue-200'
              }`}>
                {isGeeky && <span className="text-green-400">@</span>}{publication.venue}
              </Text>
              <Text className={isGeeky ? 'text-green-400' : 'text-blue-400'}>
                {isGeeky ? ' | ' : ' • '}
              </Text>
              <Text className={`text-base ${
                isGeeky ? 'text-green-200' : 'text-blue-200'
              }`}>
                {publication.year}
              </Text>
            </div>
            <div className="mb-8">
              <Button 
                type="link" 
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-0 text-base transition-colors duration-300 ${
                  isGeeky ? 'font-mono' : 'font-normal'
                }`}
                style={{ 
                  color: isGeeky ? '#86efac' : '#93c5fd'
                }}
              >
                {isGeeky ? (
                  <>
                    <span className="text-green-400">$</span> View Original Paper <span className="text-green-400">→</span>
                  </>
                ) : (
                  'View Original Paper →'
                )}
              </Button>
            </div>
          </div>

          {/* Video (if provided) */}
          {publication.videoUrl && (
            <div className={`mb-8 flex justify-center ${
              isGeeky ? 'relative' : ''
            }`}>
              {isGeeky && (
                <div className="absolute -top-6 left-0 text-green-400 text-xs font-mono opacity-60">
                  // video_stream.mp4
                </div>
              )}
              <div className="w-full max-w-4xl">
                <iframe
                  src={publication.videoUrl}
                  title={`${publication.title} - Video Presentation`}
                  className={`aspect-video w-full ${
                    isGeeky 
                      ? 'border-2 border-green-400 rounded-none shadow-lg shadow-green-400/20' 
                      : 'rounded-xl border-2 border-blue-400'
                  }`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Markdown Content */}
          <Card className={`p-6 ${
            isGeeky 
              ? 'bg-black border-2 border-green-400 rounded-none shadow-lg shadow-green-400/20 font-mono relative' 
              : 'bg-black border-2 border-blue-400 rounded-lg'
          }`}>
            {isGeeky && (
              <div className="absolute top-2 right-2 text-green-400 text-xs opacity-60">
                // content.md
              </div>
            )}
            <div className={`markdown-content ${
              isGeeky ? 'font-mono' : 'font-normal'
            }`}>
              <ReactMarkdown>{publication.content}</ReactMarkdown>
            </div>
          </Card>
        </Container>
      </Content>
    </Layout>
  )
}

export default PublicationPage