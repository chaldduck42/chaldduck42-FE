import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <div className="px-5 pt-10 h-full bg-white">{children}</div>
}
