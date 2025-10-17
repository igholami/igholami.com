import React, { createContext, useContext, useState, ReactNode, useEffect, useRef, useCallback } from 'react'

type Theme = 'geeky' | 'minimal'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isGeeky: boolean
  is404: boolean
  setIs404: (value: boolean) => void
  sudoMode: boolean
  countdown: number
  activateSudoMode: () => void
  resetSudoMode: () => void
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
  const [sudoMode, setSudoMode] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [typedCommand, setTypedCommand] = useState('')
  const countdownRef = useRef<NodeJS.Timeout | null>(null)

  const toggleTheme = () => {
    setTheme(prev => prev === 'geeky' ? 'minimal' : 'geeky')
  }

  const isGeeky = theme === 'geeky'

  const activateSudoMode = useCallback(() => {
    setSudoMode(true)
    setTheme('geeky')
    setCountdown(15)
    setTypedCommand('')
    
    // Clear any existing countdown
    if (countdownRef.current) {
      clearInterval(countdownRef.current)
    }
    
    // Start countdown
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setSudoMode(false)
          setTheme('minimal')
          if (countdownRef.current) {
            clearInterval(countdownRef.current)
            countdownRef.current = null
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  const resetSudoMode = useCallback(() => {
    setSudoMode(false)
    setTheme('minimal')
    setCountdown(0)
    setTypedCommand('')
    if (countdownRef.current) {
      clearInterval(countdownRef.current)
      countdownRef.current = null
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current)
      }
    }
  }, [])

  // Keyboard listener for sudo command
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // If in sudo mode, check for 'q' to exit
      if (sudoMode) {
        if (e.key.toLowerCase() === 'q') {
          resetSudoMode()
          return
        }
        
        // If in sudo mode and "sudo" is typed again, restart
        const newCommand = typedCommand + e.key.toLowerCase()
        setTypedCommand(newCommand)
        
        if (newCommand === 'sudo') {
          activateSudoMode()
        } else if (!'sudo'.startsWith(newCommand)) {
          setTypedCommand('')
        }
      } else {
        // Only listen when not in sudo mode
        const newCommand = typedCommand + e.key.toLowerCase()
        setTypedCommand(newCommand)
        
        // Check if "sudo" was typed
        if (newCommand === 'sudo') {
          activateSudoMode()
        } else if (!'sudo'.startsWith(newCommand)) {
          // Reset if the typed sequence doesn't match "sudo"
          setTypedCommand('')
        }
        
        // Reset if command gets too long
        if (newCommand.length > 10) {
          setTypedCommand('')
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [sudoMode, typedCommand, activateSudoMode, resetSudoMode])

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isGeeky, 
      is404, 
      setIs404, 
      sudoMode, 
      countdown, 
      activateSudoMode, 
      resetSudoMode 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
