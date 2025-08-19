import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import PublicationPage from './components/PublicationPage'

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publication/:slug" element={<PublicationPage />} />
      </Routes>
    </Router>
  )
}

export default App