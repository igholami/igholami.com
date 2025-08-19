import { Typography, Card } from 'antd'
import { awards } from '../data/personalData'

const { Title, Text } = Typography

const AwardsSection: React.FC = () => {
  return (
    <div>
      <Title level={2} className="text-white text-3xl font-semibold mb-2">Awards & Recognition</Title>
      <Card className="bg-gray-800 border border-gray-700 rounded-xl p-4">
        <div>
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="pb-2 mb-2 last:pb-0 last:mb-0"
            >
              <Text className="text-white text-base">
                {award}
              </Text>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default AwardsSection