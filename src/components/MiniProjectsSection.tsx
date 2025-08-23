import React from 'react';
import { Typography, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useTheme } from '../contexts/ThemeContext';
import { miniProjects } from '../data/personalData';

const { Title, Text } = Typography;

const MiniProjectsSection: React.FC = () => {
  const { isGeeky } = useTheme();

  // Filter projects based on theme - show all in geeky mode, only non-geeky projects in minimal mode
  const filteredProjects = isGeeky 
    ? miniProjects 
    : miniProjects.filter(project => !project.geekyOnly);

  return (
    <div>
      <Title level={2} className={`text-3xl font-semibold mb-2 ${
        isGeeky ? 'font-mono text-green-300' : 'font-normal text-blue-300'
      }`}>
        {isGeeky ? (
          <>
            <span className="text-green-400">&gt;</span> Personal Mini Projects<span className="text-green-400 animate-pulse">_</span>
          </>
        ) : (
          'Personal Mini Projects'
        )}
      </Title>
      <Card className={`p-4 ${
        isGeeky 
          ? 'bg-black border-2 border-green-400 rounded-none shadow-lg shadow-green-400/20 font-mono relative' 
          : 'bg-black border-2 border-blue-400 rounded-lg'
      }`}>
        {isGeeky && (
          <div className="absolute top-2 right-2 text-green-400 text-xs opacity-60">
            // {filteredProjects.length} projects
          </div>
        )}
        <div>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`pb-2 mb-2 last:pb-0 last:mb-0 transition-all duration-300 ${
                isGeeky 
                  ? 'border-l-2 border-green-400/30 hover:border-green-400 pl-3' 
                  : 'hover:bg-blue-400/5 p-2 rounded'
              }`}
            >
              {isGeeky ? (
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <Title 
                      level={5} 
                      className="m-0 mb-2 font-mono"
                    >
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline transition-colors duration-300 hover:underline"
                        style={{ color: '#86efac' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#4ade80'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#86efac'}
                      >
                        {project.name}
                      </a>
                    </Title>
                    <Text className="text-gray-400 text-sm font-mono">
                      {project.description}
                    </Text>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs rounded bg-green-400/10 border border-green-400/30 text-green-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <Title 
                    level={5} 
                    className="m-0 mb-1"
                  >
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline transition-colors duration-300 hover:underline"
                      style={{ color: '#93c5fd' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#60a5fa'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#93c5fd'}
                    >
                      {project.name}
                    </a>
                  </Title>
                  <Text className="text-blue-100 text-sm">
                    {project.description}
                  </Text>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded bg-blue-400/10 border border-blue-400/30 text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* GitHub Link at bottom */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <a
            href="https://github.com/igholami"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 transition-colors duration-300 ${
              isGeeky 
                ? 'font-mono' 
                : ''
            }`}
            style={{
              color: isGeeky ? '#4ade80' : '#60a5fa'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = isGeeky ? '#22c55e' : '#3b82f6'}
            onMouseLeave={(e) => e.currentTarget.style.color = isGeeky ? '#4ade80' : '#60a5fa'}
          >
            <GithubOutlined />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default MiniProjectsSection;
