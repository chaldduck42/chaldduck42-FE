'use client'

import { useEffect } from 'react'

const MSWComponent = () => {
  useEffect(() => {
    // 윈도우가 undefined가 아니라는 것은, 존재한다는 것이고 이것은 clinet 즉 브라우저 환경이라는 것 (=브라우저에서만 돌아간다)
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        // eslint-disable-next-line global-require
        require('@/mocks/browser')
      }
    }
  }, [])
  return null
}

export default MSWComponent
