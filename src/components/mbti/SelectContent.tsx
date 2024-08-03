'use client'
import { QuestionList } from '@/types/mbti'
import mbtiCaculate from '@/utils/mbtiCalculate'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  id: number
  info: QuestionList
}
const SelectContent = ({ id, info }: Props) => {
  const router = useRouter()
  const nickname = localStorage.getItem('userInfo')
  const handlePrev = () => {
    router.push(`/mbti/${id - 1}`)
  }
  const handleNext = (score: string) => {
    localStorage.setItem(String(id), score)
    if (id === 12) {
      const result = mbtiCaculate()
      axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/mbti/result`, {
        nickname,
        mbtiResultList: result,
      })
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
