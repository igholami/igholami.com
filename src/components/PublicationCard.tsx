import { Card, Typography } from 'antd'

const { Title, Text } = Typography

const PublicationCard = ({ publication }) => {
  const handleCardClick = () => {
    window.open(publication.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card 
      className="bg-gray-800 border border-gray-700 rounded-xl p-4 cursor-pointer" 
      onClick={handleCardClick}
    >
      <Title 
        level={5} 
        className="text-white m-0 mb-1"
      >
        {publication.title}
      </Title>
      <div className="text-gray-400 text-sm">
        {publication.venues.map((v) => (
          <div key={v}>{v}</div>
        ))}
      </div>
    </Card>
  )
}

export default PublicationCard