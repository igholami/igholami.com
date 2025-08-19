import { Layout, Grid } from 'antd'
import { useEffect } from 'react'
import HeroSection from './HeroSection'
import PublicationsSection from '../PublicationsSection'
import ProjectsSection from '../ProjectsSection'
import AwardsSection from '../AwardsSection'
import Container from '../common/Container'

const { Content } = Layout
const { useBreakpoint } = Grid

const HomePage: React.FC = () => {
  const screens = useBreakpoint()
  const isMobile = !screens.md

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout className="dark-layout w-full h-full py-2">
      <Content className="w-full h-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-1">
          <Container>
            <HeroSection />
          </Container>
          <Container>
            <PublicationsSection />
          </Container>
          <Container>
            <ProjectsSection />
          </Container>
          <Container>
            <AwardsSection />
          </Container>
        </div>
      </Content>
    </Layout>
  )
}

export default HomePage