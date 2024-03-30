import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DashBoard from '@/app/components/dashboard'

describe('Dashboard', () => {
  it('shourd dashboard ', () => {
    render(<DashBoard />)

    const header = screen.getByRole('heading')
    expect(header).toHaveTextContent('하이 대쉬보드야')
  })
})
