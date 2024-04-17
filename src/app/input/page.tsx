'use client'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { sampleAtom } from '@/recoil/atom'

const Home = () => {
  const sample = useRecoilValue(sampleAtom)

  return (
    <div>
      <div>유저 정보를 입력받는 페이지 입니다</div>
      닉네임 : <input type="text" placeholder="내용을 입력해 주세요"></input>
      생년월일 : <input type="text" placeholder="내용을 입력해 주세요"></input>
      <br></br>
      <a href="/mbti">다음</a>
    </div>
  )
}

export default Home
