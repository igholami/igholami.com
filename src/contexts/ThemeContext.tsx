import React, { createContext, useContext, useState, ReactNode } from 'react'

type Theme = 'geeky' | 'minimal'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isGeeky: boolean
  is404: boolean
  setIs404: (value: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('minimal')
  const [is404, setIs404] = useState(false)

  const toggleTheme = () => {
    setTheme(prev => prev === 'geeky' ? 'minimal' : 'geeky')
  }

  const isGeeky = theme === 'geeky'

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isGeeky, is404, setIs404 }}>
      {children}
    </ThemeContext.Provider>
  )
}
