import React, { useEffect } from 'react'
import { Typography, Button, Layout } from 'antd'
import { ArrowLeftOutlined, HomeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Container } from './common'
import { useTheme } from '../contexts/ThemeContext'

const { Title, Text } = Typography
const { Content } = Layout

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const { isGeeky, setIs404 } = useTheme()

  // Set 404 state and scroll to top when component mounts
  useEffect(() => {
    setIs404(true)
    window.scrollTo(0, 0)
    
    // Clean up when component unmounts
    return () => setIs404(false)
  }, [])

  return (
    <Layout className="dark-layout">
      <Content className="py-10 flex flex-col items-center min-h-screen justify-center">
        <Container className="text-center">
          <div className={`p-8 ${
            isGeeky 
              ? 'bg-black/50 border-2 border-red-400/50 rounded-none shadow-lg shadow-red-400/20 font-mono relative' 
              : 'bg-black/30 rounded-lg'
          }`}>
            {isGeeky && (
              <>
                <div className="absolute top-2 left-2 text-red-400 text-xs font-mono opacity-60">
                  // error.cpp
                </div>
                <div className="absolute top-2 right-2 text-red-400 text-xs font-mono opacity-60">
                  Status: 404
                </div>
              </>
            )}
            
            {/* Error Code */}
            <Title level={1} className={`mb-4 ${
              isGeeky 
                ? 'text-6xl font-mono text-red-400' 
                : 'text-6xl font-light text-blue-300'
            }`}>
              {isGeeky ? (
                <>
                  <span className="text-red-500">ERROR:</span> 404
                </>
              ) : (
                '404'
              )}
            </Title>

            {/* Error Message */}
            <Title level={2} className={`mb-6 ${
              isGeeky 
                ? 'font-mono text-red-300' 
                : 'font-normal text-blue-200'
            }`}>
              {isGeeky ? (
                <>
                  <span className="text-red-400">{'>'}</span> Page Not Found<span className="text-red-400 animate-pulse">_</span>
                </>
              ) : (
                'Page Not Found'
              )}
            </Title>

            {/* Error Description */}
            <Text className={`text-lg mb-8 block ${
              isGeeky 
                ? 'font-mono text-gray-300' 
                : 'text-blue-100'
            }`}>
              {isGeeky ? (
                <>
                  <span className="text-red-400">// Error:</span> The requested resource could not be located.<br/>
                  <span className="text-red-400">// Suggestion:</span> Check the URL or navigate back to safety.
                </>
              ) : (
                'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
              )}
            </Text>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                type="primary" 
                icon={<HomeOutlined />}
                onClick={() => navigate('/')}
                className={`transition-colors duration-300 ${
                  isGeeky 
                    ? 'font-mono bg-green-600 border-green-500 hover:bg-green-500 hover:border-green-400' 
                    : 'bg-blue-600 border-blue-500 hover:bg-blue-500 hover:border-blue-400'
                }`}
                style={{
                  color: isGeeky ? '#86efac' : '#93c5fd'
                }}
              >
                {isGeeky ? (
                  <>
                    <span className="text-green-300">$</span> cd ~/home
                  </>
                ) : (
                  'Go to Homepage'
                )}
              </Button>

              <Button 
                icon={<ArrowLeftOutlined />}
                onClick={() => window.history.back()}
                className={`transition-colors duration-300 ${
                  isGeeky 
                    ? 'font-mono border-red-400 hover:border-red-300 hover:bg-red-400/10' 
                    : 'border-blue-400 hover:border-blue-300 hover:bg-blue-400/10'
                }`}
                style={{
                  color: isGeeky ? '#fca5a5' : '#93c5fd'
                }}
              >
                {isGeeky ? (
                  <>
                    <span className="text-red-400">git</span> checkout HEAD~1
                  </>
                ) : (
                  'Go Back'
                )}
              </Button>
            </div>

            {/* Geeky terminal output */}
            {isGeeky && (
              <div className="mt-8 text-left bg-black/30 border border-red-400/30 p-4 rounded font-mono text-sm">
                <div className="text-red-400 mb-2">$ ls -la /requested/path</div>
                <div className="text-gray-400">ls: cannot access '/requested/path': No such file or directory</div>
                <div className="text-red-400 mt-2">$ echo "Redirecting to safety..."</div>
                <div className="text-green-400 animate-pulse">Redirecting to safety...</div>
              </div>
            )}
          </div>
        </Container>
      </Content>
    </Layout>
  )
}

export default NotFoundPage
