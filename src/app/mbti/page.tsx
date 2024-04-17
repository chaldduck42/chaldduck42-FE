'use client'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { sampleAtom } from '@/recoil/atom'

const Home = () => {
  const sample = useRecoilValue(sampleAtom)

  return (
    <div>
      <div>내 성격과 유사한 값을 입력하는 설문조사 페이지 입니다</div>
    </div>
  )
}

export default Home
