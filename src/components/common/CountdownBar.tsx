import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const CountdownBar: React.FC = () => {
  const { sudoMode, countdown } = useTheme()

  if (!sudoMode || countdown <= 0) {
    return null
  }

  const progress = (countdown / 15) * 100

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      {/* Background - uniform green */}
      <div className="absolute inset-0 bg-green-500" />
      {/* Progress overlay */}
      <div 
        className="absolute inset-0 bg-gray-900 transition-all duration-1000 ease-linear"
        style={{ width: `${100 - progress}%` }}
      />
    </div>
  )
}

export default CountdownBar
