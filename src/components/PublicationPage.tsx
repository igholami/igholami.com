import { Typography, Button, Card, Layout, Badge } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { publications } from '../data/personalData'
import { Container, MathRenderer } from './common'
import { useTheme } from '../contexts/ThemeContext'

const { Title, Text } = Typography
const { Content } = Layout

const PublicationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { isGeeky } = useTheme()
  
  const publication = publications.find(pub => pub.slug === slug)

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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  
  // Redirect invalid slugs to the app-wide 404 page reliably
  useEffect(() => {
    if (!publication) {
      navigate('/404', { replace: true })
    }
  }, [publication, navigate])

  if (!publication) return null

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
            <div className="flex items-start justify-between gap-4 mb-4">
              <Title level={1} className={`my-2 text-4xl flex-1 ${
                isGeeky ? 'font-mono text-green-300' : 'font-normal text-blue-300'
              }`}>
                {isGeeky && <span className="text-green-400">&gt;</span>} {<MathRenderer>{publication.title}</MathRenderer>}
              </Title>
              {getBadgeInfo(publication.badge) && (
                  <Badge 
                    count={getBadgeInfo(publication.badge)!.text}
                    style={{ 
                      backgroundColor: getBadgeInfo(publication.badge)!.color,
                      color: getBadgeInfo(publication.badge)!.textColor,
                      fontSize: '13px',
                      fontWeight: 'bold',
                      height: '28px',
                      lineHeight: '28px',
                      minWidth: '100px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '8px'
                    }} 
                  />
              )}
            </div>
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
              <ReactMarkdown
                components={{
                  // Render math inside headings while preserving structure
                  h1: ({ children, ...props }) => (
                    <h1 {...props} className="text-3xl font-bold mb-4">
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </h1>
                  ),
                  h2: ({ children, ...props }) => (
                    <h2 {...props} className="text-2xl font-bold mb-3">
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </h2>
                  ),
                  h3: ({ children, ...props }) => (
                    <h3 {...props} className="text-xl font-bold mb-2">
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </h3>
                  ),
                  h4: ({ children, ...props }) => (
                    <h4 {...props} className="text-lg font-bold mb-2">
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </h4>
                  ),
                  h5: ({ children, ...props }) => (
                    <h5 {...props} className="text-base font-bold mb-1">
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </h5>
                  ),
                  h6: ({ children, ...props }) => (
                    <h6 {...props} className="text-sm font-bold mb-1">
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </h6>
                  ),
                  // Render math inside paragraphs while preserving structure
                  p: ({ children, ...props }) => {
                    const renderChildren = (nodes: React.ReactNode): React.ReactNode => {
                      if (typeof nodes === 'string') return <MathRenderer>{nodes}</MathRenderer>;
                      if (Array.isArray(nodes)) {
                        return nodes.map((node, idx) => (
                          typeof node === 'string' ? <MathRenderer key={idx}>{node}</MathRenderer> : node
                        ));
                      }
                      return nodes;
                    };
                    return <p {...props} className="mb-3">{renderChildren(children)}</p>;
                  },
                  // Render math inside list items
                  li: ({ children, ...props }) => {
                    const renderChildren = (nodes: React.ReactNode): React.ReactNode => {
                      if (typeof nodes === 'string') return <MathRenderer>{nodes}</MathRenderer>;
                      if (Array.isArray(nodes)) {
                        return nodes.map((node, idx) => (
                          typeof node === 'string' ? <MathRenderer key={idx}>{node}</MathRenderer> : node
                        ));
                      }
                      return nodes;
                    };
                    return <li {...props} className="mb-1">{renderChildren(children)}</li>;
                  },
                  // Emphasis and strong should also pass through math when plain text
                  strong: ({ children, ...props }) => (
                    <strong {...props}>
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </strong>
                  ),
                  em: ({ children, ...props }) => (
                    <em {...props}>
                      {typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}
                    </em>
                  ),
                  // Handle lists properly
                  ul: ({ children, ...props }) => (
                    <ul {...props} className="list-disc list-inside mb-3 space-y-1">
                      {children}
                    </ul>
                  ),
                  ol: ({ children, ...props }) => (
                    <ol {...props} className="list-decimal list-inside mb-3 space-y-1">
                      {children}
                    </ol>
                  ),
                }}
              >
                {publication.content}
              </ReactMarkdown>
            </div>
          </Card>
        </Container>
      </Content>
    </Layout>
  )
}

export default PublicationPage