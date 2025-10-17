import { Typography, Avatar, Grid } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import SocialIcons from './components/SocialIcons'
import { personalInfo } from '../../data/personalData'
import { useTheme } from '../../contexts/ThemeContext'

const { Title, Paragraph } = Typography
const { useBreakpoint } = Grid

const HeroSection: React.FC = () => {
  const screens = useBreakpoint()
  const isMobile = !screens.md
  const { isGeeky } = useTheme()

  const DesktopLayout = () => (
    <div className={`flex flex-row justify-between items-center p-6 ${
      isGeeky 
        ? 'bg-black/50 border-2 border-green-400/30 relative' 
        : 'bg-black/30 rounded-lg'
    }`}>
      {isGeeky && (
        <>
          <div className="absolute top-2 left-2 text-green-400 text-xs font-mono opacity-60">
            // main.cpp
          </div>
          <div className="absolute top-2 right-2 text-green-400 text-xs font-mono opacity-60">
            Status: Active
          </div>
        </>
      )}
      <div className="flex flex-col gap-8 w-2/3">
        <h1 className={`${
          isGeeky 
            ? 'font-mono text-green-200' 
            : 'font-light text-blue-200'
        }`} style={{ fontSize: '2.5rem', lineHeight: '1.1', margin: 0, fontWeight: 'inherit' }}>
          {isGeeky ? (
            <>
              <span className="text-green-400">class</span> {personalInfo.name.replace(' ', '')} <span className="text-green-400">{'{'}</span>
            </>
          ) : (
            personalInfo.name
          )}
        </h1>
        <h3 className={`${
          isGeeky 
            ? 'font-mono text-green-100 ml-4' 
            : 'font-light text-blue-100'
        }`} style={{ fontSize: '1.5rem', lineHeight: '1.2', margin: 0, fontWeight: 'inherit' }}>
          {isGeeky ? (
            <>
              <span className="text-green-400">public:</span> {personalInfo.title}
            </>
          ) : (
            personalInfo.title
          )}
        </h3>
        <p className={`${
          isGeeky 
            ? 'font-mono text-gray-200 ml-4 border-l-2 border-green-400/30 pl-4' 
            : 'text-blue-50'
        }`} style={{ fontSize: '1.1rem', lineHeight: '1.4', margin: 0 }}>
          {isGeeky && <><span className="text-green-400">// About</span><br/></>}
          {personalInfo.bio}
        </p>
        <p className={`${
          isGeeky 
            ? 'font-mono text-gray-200 ml-4 border-l-2 border-green-400/30 pl-4' 
            : 'text-blue-50'
        }`} style={{ fontSize: '1.1rem', lineHeight: '1.4', margin: 0 }}>
          {isGeeky && <><span className="text-green-400">// Research Focus</span><br/></>}
          {personalInfo.researchFocus}
        </p>
        <div className={isGeeky ? 'ml-4' : ''}>
          <SocialIcons justify="start" />
        </div>
        {isGeeky && (
          <div className="text-cyan-300 font-mono text-xl">
            <span className="text-green-400">{'};'}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <Avatar 
          size={250}
          src={personalInfo.profileImage}
          icon={<UserOutlined />}
          className={isGeeky 
            ? 'border-4 border-green-400 shadow-lg shadow-green-400/30' 
            : 'border-4 border-blue-400'
          }
        />
        {isGeeky && (
          <div className="text-green-400 font-mono text-xs mt-2 opacity-60">
            // profile.jpg
          </div>
        )}
      </div>
    </div>
  )

  const MobileLayout = () => (
    <div className={`p-4 w-full ${
      isGeeky 
        ? 'bg-black/50 border-2 border-green-400/30 relative' 
        : 'bg-black/30 rounded-lg'
    }`}>
      {isGeeky && (
        <div className="absolute top-2 left-2 text-green-400 text-xs font-mono opacity-60">
          // mobile.cpp
        </div>
      )}
      <div className="flex flex-col items-center">
        <Avatar 
          size={120}
          src={personalInfo.profileImage}
          icon={<UserOutlined />}
          className={`mb-6 border-4 ${
            isGeeky 
              ? 'shadow-lg shadow-green-400/30 border-green-400' 
              : 'border-blue-400'
          }`}
        />
        {isGeeky && (
          <div className="text-green-400 font-mono text-xs mb-4 opacity-60">
            // profile.jpg
          </div>
        )}
        <Title level={1} className={`text-4xl mb-2 text-center ${
          isGeeky 
            ? 'text-cyan-200 font-mono' 
            : 'text-blue-50 font-light'
        }`}>
          {isGeeky ? (
            <>
              <span className="text-green-400">class</span> {personalInfo.name.replace(' ', '')}
            </>
          ) : (
            personalInfo.name
          )}
        </Title>
        <Title level={3} className={`text-2xl mb-4 text-center ${
          isGeeky 
            ? 'text-yellow-300 font-mono' 
            : 'text-blue-200 font-light'
        }`}>
          {isGeeky ? (
            <>
              <span className="text-green-400">public:</span> {personalInfo.title}
            </>
          ) : (
            personalInfo.title
          )}
        </Title>
        <Paragraph className={`text-lg max-w-2xl mx-auto mb-4 text-center ${
          isGeeky 
            ? 'text-gray-200 font-mono border border-green-400/30 p-3' 
            : 'text-blue-100'
        }`}>
          {isGeeky && <><span className="text-green-400">// About</span><br/></>}
          {personalInfo.bio}
        </Paragraph>
        <Paragraph className={`text-lg mb-6 text-center ${
          isGeeky 
            ? 'text-gray-200 font-mono border border-green-400/30 p-3' 
            : 'text-blue-100'
        }`}>
          {isGeeky && <><span className="text-green-400">// Research Focus</span><br/></>}
          {personalInfo.researchFocus}
        </Paragraph>
        <SocialIcons justify="center" />
        {isGeeky && (
          <div className="text-cyan-300 font-mono text-lg mt-4">
            <span className="text-green-400">{'};'}</span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className={`${isMobile ? 'min-h-screen flex flex-col justify-center items-center px-6 py-20' : 'min-h-0 py-12'}`}>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  )
}

export default HeroSection