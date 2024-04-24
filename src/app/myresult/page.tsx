'use client'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { sampleAtom } from '@/recoil/atom'

const Home = () => {
  const sample = useRecoilValue(sampleAtom)

  return (
    <div>
      <div>내 결과를 조회하는 페이지 입니다</div>
      <div>카카오톡으로 공유하기</div>
      <div>링크복사</div>
      <div>이미지저장</div>

      <a href="/">처음으로</a>
    </div>
  )
}

export default Home
