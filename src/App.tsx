import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import PublicationPage from './components/PublicationPage'
import NotFoundPage from './components/NotFoundPage'
import { ThemeProvider } from './contexts/ThemeContext'
import { ThemeToggle } from './components/common'

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publication/:slug" element={<PublicationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App