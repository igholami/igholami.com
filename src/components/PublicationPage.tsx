import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { publications } from '../data/personalData'
import Container from './common/Container'
import MathRenderer from './common/MathRenderer'

const PublicationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const publication = publications.find(pub => pub.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    if (!publication) navigate('/404', { replace: true })
  }, [publication, navigate])

  if (!publication) return null

  return (
    <Container>
      <p style={{ marginBottom: '1.5rem' }}>
        <Link to="/">&larr; Back</Link>
      </p>

      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
        <MathRenderer>{publication.title}</MathRenderer>
      </h1>

      <div style={{ color: '#a8a29e', marginBottom: '0.75rem' }}>
        {publication.venues.map((v) => (
          <div key={v}>{v}</div>
        ))}
      </div>

      <p>
        <a href={publication.url} target="_blank" rel="noopener noreferrer">
          View paper &rarr;
        </a>
      </p>

      {publication.videoUrl && (
        <div style={{ margin: '1.5rem 0' }}>
          <iframe
            src={publication.videoUrl}
            title={`${publication.title} - Video`}
            style={{ width: '100%', aspectRatio: '16/9', border: '1px solid #333' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <hr />

      <div>
        <ReactMarkdown
          components={{
            h1: ({ children, ...props }) => <h2 {...props}>{typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}</h2>,
            h2: ({ children, ...props }) => <h3 {...props} style={{ fontSize: '1.15rem', marginTop: '1rem' }}>{typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}</h3>,
            h3: ({ children, ...props }) => <h4 {...props}>{typeof children === 'string' ? <MathRenderer>{children}</MathRenderer> : children}</h4>,
            p: ({ children, ...props }) => {
              const render = (nodes: React.ReactNode): React.ReactNode => {
                if (typeof nodes === 'string') return <MathRenderer>{nodes}</MathRenderer>
                if (Array.isArray(nodes)) return nodes.map((n, i) => typeof n === 'string' ? <MathRenderer key={i}>{n}</MathRenderer> : n)
                return nodes
              }
              return <p {...props}>{render(children)}</p>
            }
          }}
        >
          {publication.content}
        </ReactMarkdown>
      </div>
    </Container>
  )
}

export default PublicationPage
