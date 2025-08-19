import { Card, Typography } from 'antd'

const { Title, Text } = Typography

const ProjectCard = ({ project }) => {
  return (
    <Card className="bg-gray-800 border border-gray-700 rounded-xl p-4">
      <Title level={4} className="text-white m-0 mb-1">
        {project.title}
      </Title>
      <Text className="text-gray-400 text-sm">
        {project.company}
      </Text>
    </Card>
  )
}

export default ProjectCard