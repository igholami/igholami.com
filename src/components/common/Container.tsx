import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      style={{ maxWidth: '780px' }}
      className={`w-full mx-auto px-6 py-8 ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
