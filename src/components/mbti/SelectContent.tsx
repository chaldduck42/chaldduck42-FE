'use client'
import { QuestionList } from '@/types/mbti'
import mbtiCaculate from '@/utils/mbtiCalculate'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
  id: number
  info: QuestionList
}

const SelectContent = ({ id, info }: Props) => {
  const [nickname, setNickname] = useState()
  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 함
    if (typeof window !== 'undefined') {
      const userInfo = localStorage.getItem('userInfo')
      if (userInfo) {
        setNickname(JSON.parse(userInfo).nickname)
      }
    }
  }, [])
  const router = useRouter()
  const handlePrev = () => {
    router.push(`/mbti/${id - 1}`)
  }
  const handleNext = async (score: string) => {
    localStorage.setItem(String(id), score)
    console.log(id)
    if (id === 12) {
      const result = mbtiCaculate()
      console.log(result)
      await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/mbti/result`, {
          nickname,
          mbtiResultList: result,
        })
        .then((res) => {
          for (let i: number = 1; i < 13; i += 1) {
            localStorage.removeItem(String(i))
          }
          localStorage.removeItem('userInfo')
          localStorage.setItem('mbti', res.data.mbti)
          // router.push('') 어디로 이동할지 안정함
        })

      console.log('실행됨')
    } else {
      router.push(`/mbti/${id + 1}`)
    }
  }
  return (
    <div className="w-full flex flex-col justify-between items-center mt-[56px]">
      <div className="text-Dark-Brown text-xl font-bold animate-fade-up">
        {info.question}
      </div>
      <div className="w-full pt-[94px]">
        <button
          type="button"
          value={info.answers[0].score}
          className="w-full rounded-xl min-h-[56px] text-[16px] font-bold text-Dark-Brown bg-Beige3 mb-[32px] hover:bg-Dark-Brown hover:text-white flex justify-start items-center px-[16px] animate-fade-left"
          onClick={() => handleNext(String(info.answers[0].score))}
        >
          {info.answers[0].option}
        </button>
        <button
          type="button"
          value={info.answers[1].score}
          className="w-full rounded-xl min-h-[56px] text-[16px] font-bold text-Dark-Brown bg-Beige3 hover:bg-Dark-Brown hover:text-white flex justify-start items-center px-[16px] animate-fade-left"
          onClick={() => handleNext(String(info.answers[1].score))}
        >
          {info.answers[1].option}
        </button>
      </div>
      {id === 1 ? (
        <div className="w-full rounded-xl h-16 " />
      ) : (
        <button
          type="button"
          className="w-full rounded-xl min-h-[56px] text-[16px] font-bold text-Dark-Brown border-[1px] border-Dark-Brown hover:bg-Dark-Brown hover:text-white absolute bottom-[64px] animate-fade"
          onClick={handlePrev}
        >
          이전
        </button>
      )}
    </div>
  )
}
export default SelectContent
