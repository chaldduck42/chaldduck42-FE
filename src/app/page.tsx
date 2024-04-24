'use client'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { sampleAtom } from '@/recoil/atom'
import Button from '@/components/button/DarkButton'

const Home = () => {
  const sample = useRecoilValue(sampleAtom)

  return (
    <div>
      <div>Recoil 값: {sample}</div>
      <a href="/input">내 사주 알아보기</a>
      <Button width="14" height="80" label="hello" />
    </div>
  )
}

export default Home
