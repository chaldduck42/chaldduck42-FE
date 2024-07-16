import { MbtiList } from '@/types/mbti'
import React from 'react'

interface Props {
  id: number
  info: MbtiList
}

const SelectContent = ({ id, info }: Props) => {
  return (
    <div className="flex flex-col justify-between items-center h-5/6 pt-20">
      <div className="text-Dark-Brown text-2xl font-bold">일할 때 나는?</div>
      <div>
        <button
          type="button"
          value={info.questions.question}
          className="w-full rounded-xl h-16 text-lg font-bold text-Dark-Brown bg-Beige3 mb-12 hover:bg-Dark-Brown hover:text-white"
        >
          남들이 하는대로 따라가는 것이 좋다
        </button>
        <button
          type="button"
          className="w-full rounded-xl h-16 text-lg font-bold text-Dark-Brown bg-Beige3 hover:bg-Dark-Brown hover:text-white"
        >
          스스로 나만의 방법을 만들어 나가는게 좋다
        </button>
      </div>
      {id === 1 ? (
        <div className="w-full rounded-xl h-16 " />
      ) : (
        <button
          type="button"
          className="w-full rounded-xl h-16 text-lg font-bold text-Dark-Brown border-2 border-Dark-Brown hover:bg-Dark-Brown hover:text-white"
        >
          이전
        </button>
      )}
    </div>
  )
}

export default SelectContent
