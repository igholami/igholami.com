import { Typography, Button, Card, Layout } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { publications } from '../data/personalData'
import { Container } from './common'

const { Title, Text } = Typography
const { Content } = Layout

const PublicationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  
  const publication = publications.find(pub => pub.slug === slug)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  
  if (!publication) {
    return (
      <Layout className="dark-layout">
        <Content className="py-10 flex flex-col items-center">
          <Container className="text-center py-20">
            <Title level={2}>Publication Not Found</Title>
            <Text type="secondary">The requested publication could not be found.</Text>
            <br />
            <Button 
              type="primary" 
              icon={<ArrowLeftOutlined />} 
              onClick={() => navigate('/')}
              className="mt-5"
            >
              Back to Home
            </Button>
          </Container>
        </Content>
      </Layout>
    )
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
            className="self-start px-2 py-1 mb-5"
          >
            Back to Home
          </Button>

          {/* Video Header (if provided) */}
          {publication.videoUrl && (
            <div className="mb-8 flex justify-center">
              <div className="w-full max-w-4xl">
                <iframe
                  src={publication.videoUrl}
                  title={`${publication.title} - Video Presentation`}
                  className="aspect-video w-full rounded-xl border-gray-700"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Publication Header */}
          <div>
            <Title level={1} className="mb-2 text-4xl">
              {publication.title}
            </Title>
            <div className="flex items-center space-x-2 mb-4">
              <Text strong className="text-base">
                {publication.venue}
              </Text>
              <Text type="secondary">•</Text>
              <Text type="secondary" className="text-base">
                {publication.year}
              </Text>
            </div>
            <div className="mb-8">
              <Button 
                type="link" 
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-0 text-base"
              >
                View Original Paper →
              </Button>
            </div>
          </div>

          {/* Markdown Content */}
          <Card className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="markdown-content">
              <ReactMarkdown>{publication.content}</ReactMarkdown>
            </div>
          </Card>
        </Container>
      </Content>
    </Layout>
  )
}

export default PublicationPage