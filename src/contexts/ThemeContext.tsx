import React, { createContext, useContext, ReactNode } from 'react'

interface ThemeContextType {
  isGeeky: boolean
  is404: boolean
  setIs404: (value: boolean) => void
}

const ThemeContext = createContext<ThemeContextType>({
  isGeeky: false,
  is404: false,
  setIs404: () => {}
})

export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <ThemeContext.Provider value={{ isGeeky: false, is404: false, setIs404: () => {} }}>
    {children}
  </ThemeContext.Provider>
)
