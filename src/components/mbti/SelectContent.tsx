import { QuestionList } from '@/types/mbti'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  id: number
  info: QuestionList
  type: string
}

const SelectContent = ({ id, info, type }: Props) => {
  const router = useRouter()
  // console.log(info)
  console.log(type)

  const handlePrev = () => {
    router.push(`/mbti/${id - 1}`)
  }
  const handleNext = () => {
    console.log('클릭')
    router.push(`/mbti/${id + 1}`)
  }
  return (
    <div className="w-full flex flex-col justify-between items-center mt-[56px]">
      <div className="text-Dark-Brown text-xl font-bold animate-fade-up">
        {info.question}
      </div>
      <div className="w-full pt-[94px]">
        <button
          type="button"
          value={info.question}
          className="w-full rounded-xl min-h-[56px] text-[16px] font-bold text-Dark-Brown bg-Beige3 mb-[32px] hover:bg-Dark-Brown hover:text-white flex justify-start items-center px-[16px] animate-fade-left"
          onClick={handleNext}
        >
          {info.answers[0].option}
        </button>
        <button
          type="button"
          className="w-full rounded-xl min-h-[56px] text-[16px] font-bold text-Dark-Brown bg-Beige3 hover:bg-Dark-Brown hover:text-white flex justify-start items-center px-[16px] animate-fade-left"
          onClick={handleNext}
        >
          {info.answers[1].option}
        </button>
      </div>
      {id === 0 ? (
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
