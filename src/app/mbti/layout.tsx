import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full max-w-[600px] px-5  h-full bg-Beige1 ">
      {children}
    </div>
  )
}
