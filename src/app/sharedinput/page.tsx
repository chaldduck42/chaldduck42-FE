'use client'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { sampleAtom } from '@/recoil/atom'

const Home = () => {
  const sample = useRecoilValue(sampleAtom)

  return (
    <div>
      <div>공유받은 링크에서 정보를 입력하는 페이지 입니다.</div>
    </div>
  )
}

export default Home
