'use client'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { sampleAtom } from '@/recoil/atom'
import { usePathname, useRouter } from 'next/navigation'

const Home = () => {
  const sample = useRecoilValue(sampleAtom)
  const router = useRouter()
  const [nickname, setNickname] = useState('')

  const getRelationship = (name) => {
    if (typeof name !== 'string') return null

    var lastLetter = name[name.length - 1]
    var uni = lastLetter.charCodeAt(0)

    if (uni < 44032 || uni > 55203) return null

    return (uni - 44032) % 28 != 0
  }

  const handleNicknameChange = (event) => {
    setNickname(event.target.value)
  }

  const handleNextClick = () => {
    const isEndingWithBatchim = getRelationship(nickname)
    const newNM = isEndingWithBatchim ? `${nickname}이랑` : `${nickname}랑`
    alert(newNM)

    router.push('/mbti')
  }

  return (
    <div>
      <div>유저 정보를 입력받는 페이지 입니다</div>
      <br></br>
      닉네임 :{' '}
      <input
        type="text"
        placeholder="내용을 입력해 주세요"
        value={nickname}
        onChange={handleNicknameChange}
      ></input>
      <br></br>
      생년월일 : <input type="text" placeholder="내용을 입력해 주세요"></input>
      <br></br>
      <button onClick={handleNextClick}>다음</button>
    </div>
  )
}

export default Home
