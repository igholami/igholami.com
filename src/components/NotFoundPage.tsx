import { Link } from 'react-router-dom'
import Container from './common/Container'

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <h1>404</h1>
      <p>Page not found.</p>
      <p><Link to="/">&larr; Back to home</Link></p>
    </Container>
  )
}

export default NotFoundPage
