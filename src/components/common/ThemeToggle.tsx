import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { isGeeky, toggleTheme, is404 } = useTheme()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        key={isGeeky ? 'geeky' : 'minimal'}
        onClick={toggleTheme}
        className={`
          group relative w-12 h-12 rounded-full transition-all duration-500 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-black
          ${isGeeky 
            ? `bg-black border-2 shadow-md focus:ring-opacity-50 ${
                is404 
                  ? 'border-red-400 shadow-red-400/50 focus:ring-red-400/50 hover:shadow-red-400/70'
                  : 'border-green-400 shadow-green-400/50 focus:ring-green-400/50 hover:shadow-green-400/70'
              }`
            : 'bg-black border-2 border-blue-400 shadow-md shadow-blue-400/50 focus:ring-blue-400/50 hover:shadow-blue-400/70'
          }
        `}
        role="switch"
        aria-checked={isGeeky}
        aria-label="Toggle theme"
      >
        <div className={`
          absolute inset-1.5 rounded-full transition-all duration-500 flex items-center justify-center
          ${isGeeky 
            ? `${is404 ? 'bg-red-400/20' : 'bg-green-400/20'} animate-pulse`
            : 'bg-blue-400/20'
          }
        `}>
          <div className={`
            w-4 h-4 rounded-full transition-all duration-500
            ${isGeeky 
              ? `${is404 ? 'bg-red-400 shadow-md shadow-red-400/50' : 'bg-green-400 shadow-md shadow-green-400/50'}`
              : 'bg-blue-400 shadow-md shadow-blue-400/50'
            }
          `}>
            <div className={`
              absolute inset-0.5 rounded-full transition-all duration-500
              ${isGeeky 
                ? `${is404 ? 'bg-red-300 animate-ping' : 'bg-green-300 animate-ping'}`
                : 'bg-blue-300'
              }
            `} />
          </div>
        </div>
        
        {/* Weird decorative elements */}
        <div className={`
          absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full transition-all duration-500
          ${isGeeky 
            ? `${is404 ? 'bg-red-400 animate-bounce' : 'bg-green-400 animate-bounce'}`
            : 'bg-blue-400'
          }
        `} />
        <div className={`
          absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 rounded-full transition-all duration-700
          ${isGeeky 
            ? `${is404 ? 'bg-red-300 animate-pulse' : 'bg-green-300 animate-pulse'}`
            : 'bg-blue-300'
          }
        `} />
      </button>
    </div>
  )
}

export default ThemeToggle
