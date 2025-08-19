import { Typography, Card } from 'antd'
import { Link } from 'react-router-dom'
import { publications } from '../data/personalData'

const { Title, Text } = Typography

const PublicationsSection: React.FC = () => {
  // Sort publications by order field
  const sortedPublications = [...publications].sort((a, b) => b.order - a.order)

  return (
    <div>
      <Title level={2} className="text-white text-3xl font-semibold mb-6">Publications</Title>
      <Card className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div>
          {sortedPublications.map((publication) => (
            <div 
              key={publication.id} 
              className="pb-4 mb-4 last:pb-0 last:mb-0"
            >
              <Title 
                level={5} 
                className="m-0 mb-2"
              >
                <Link 
                  to={`/publication/${publication.slug}`}
                  className="text-white no-underline hover:text-blue-500 transition-colors duration-300"
                >
                  {publication.title}
                </Link>
              </Title>
              <Text className="text-gray-400 text-sm">
                {publication.venue} {publication.year}
              </Text>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default PublicationsSection