import { Typography, Card } from 'antd'
import { projects } from '../data/personalData'

const { Title, Text } = Typography

const ProjectsSection: React.FC = () => {
  return (
    <div>
      <Title level={2} className="text-white text-3xl font-semibold mb-6">Selected Projects</Title>
      <Card className="bg-gray-800 border border-gray-700 rounded-xl p-6">
        <div>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="pb-4 mb-4 last:pb-0 last:mb-0"
            >
              <Title 
                level={4} 
                className="text-white m-0 mb-2"
              >
                {project.title}
              </Title>
              <Text className="text-gray-400 text-sm">
                {project.company}
              </Text>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default ProjectsSection