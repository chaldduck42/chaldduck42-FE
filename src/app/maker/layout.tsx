import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full max-w-[600px] px-[29px] pt-[48px] h-full bg-Beige1 flex justify-center items-center">
      {children}
    </div>
  )
}
