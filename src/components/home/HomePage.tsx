import { Layout } from 'antd'
import { useEffect, lazy, Suspense } from 'react'
import HeroSection from './HeroSection'
import Container from '../common/Container'

// Lazy load sections to reduce initial bundle size
const PublicationsSection = lazy(() => import('../PublicationsSection'))
const AwardsSection = lazy(() => import('../AwardsSection'))
const MiniProjectsSection = lazy(() => import('../MiniProjectsSection'))

const { Content } = Layout

const HomePage: React.FC = () => {

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout className="dark-layout w-full h-full py-2">
      <Content className="w-full h-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <Container>
            <HeroSection />
          </Container>
          <Suspense fallback={<div className="text-center py-8 text-gray-400">Loading...</div>}>
            <Container>
              <PublicationsSection />
            </Container>
          </Suspense>
          <Suspense fallback={<div className="text-center py-8 text-gray-400">Loading...</div>}>
            <Container>
              <AwardsSection />
            </Container>
          </Suspense>
          <Suspense fallback={<div className="text-center py-8 text-gray-400">Loading...</div>}>
            <Container>
              <MiniProjectsSection />
            </Container>
          </Suspense>
        </div>
      </Content>
    </Layout>
  )
}

export default HomePage