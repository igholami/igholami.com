import { Typography, Avatar, Grid } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import SocialIcons from './components/SocialIcons'
import { personalInfo } from '../../data/personalData'

const { Title, Paragraph } = Typography
const { useBreakpoint } = Grid

const HeroSection: React.FC = () => {
  const screens = useBreakpoint()
  const isMobile = !screens.md

  const DesktopLayout = () => (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-4 w-2/3">
        <Title level={1} className="text-4xl font-light">
          {personalInfo.name}
        </Title>
        <Title level={3} className="text-2xl font-light">
          {personalInfo.title}
        </Title>
        <Paragraph className="text-lg">
          {personalInfo.bio}
        </Paragraph>
        <Paragraph className="text-lg">
          {personalInfo.researchFocus}
        </Paragraph>
        <SocialIcons justify="start" />
      </div>
      <div className="flex flex-col items-center">
        <Avatar 
          size={250}
          src={personalInfo.profileImage}
          icon={<UserOutlined />}
          className="rounded-full"
        />
      </div>
    </div>
  )

  const MobileLayout = () => (
    <>
      <Avatar 
        size={120}
        src={personalInfo.profileImage}
        icon={<UserOutlined />}
        className="mb-8 shadow-2xl border-4 border-gray-700"
      />
      <Title level={1} className="text-white text-3xl font-light mb-2 text-center">
        {personalInfo.name}
      </Title>
      <Title level={3} className="text-gray-400 text-xl font-light opacity-80 mb-6 text-center">
        {personalInfo.title}
      </Title>
      <Paragraph className="text-gray-400 text-base max-w-2xl mx-auto mb-8 opacity-90 text-center">
        {personalInfo.bio}
      </Paragraph>
      <Paragraph className="text-gray-400 text-base mb-8 opacity-90 text-center">
        {personalInfo.researchFocus}
      </Paragraph>
      <SocialIcons justify="center" />
    </>
  )

  return (
    <div className={`${isMobile ? 'min-h-screen flex flex-col justify-center items-center px-6 py-20' : 'min-h-0 py-12'}`}>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  )
}

export default HeroSection