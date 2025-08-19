import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = ''
}) => {
  return (
    <div 
      className={`
        w-full
        max-w-full
        xl:max-w-6xl 
        2xl:max-w-7xl
        mx-auto 
        p-2
        sm:p-4 
        lg:p-8 
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Container
