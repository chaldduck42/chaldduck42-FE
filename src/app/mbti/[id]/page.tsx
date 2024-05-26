'use client'
import ProgressNavBar from '@/components/mbti/ProgressNavBar'
import React from 'react'

const page = () => {
  return (
    <div className="h-full">
      <ProgressNavBar />
      <div className="flex flex-col justify-between items-center h-5/6 pt-20">
        <div className="text-Dark-Brown text-2xl font-bold">일할 때 나는?</div>
        <div>
          <button className="w-full rounded-xl h-16 text-lg font-bold text-Dark-Brown bg-Beige3 mb-12">
            남들이 하는대로 따라가는 것이 좋다
          </button>
          <button className="w-full rounded-xl h-16 text-lg font-bold text-Dark-Brown bg-Beige3">
            스스로 나만의 방법을 만들어 나가는게 좋다
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
