import { miniProjects } from '../data/personalData'

const MiniProjectsSection: React.FC = () => {
  return (
    <section>
      <h2>Side Projects</h2>
      <ul>
        {miniProjects.map((project) => (
          <li key={project.id}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            {' — '}{project.description}
          </li>
        ))}
      </ul>
      <p style={{ fontSize: '0.9rem', color: '#a8a29e' }}>
        More on <a href="https://github.com/igholami" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </section>
  )
}

export default MiniProjectsSection
