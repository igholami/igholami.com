import { useEffect } from 'react'
import HeroSection from './HeroSection'
import NewsSection from '../NewsSection'
import PublicationsSection from '../PublicationsSection'
import AwardsSection from '../AwardsSection'
import Container from '../common/Container'

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <HeroSection />
      <PublicationsSection />
      <NewsSection />
      <AwardsSection />
    </Container>
  )
}

export default HomePage
