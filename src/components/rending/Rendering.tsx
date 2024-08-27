'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import FirstRending from './FirstRendering'
import SecondRending from './SecondRendering'
import ThirdRendering from './ThirdRendering'
import FifthRendering from './FifthRendering'

const Rendering = () => {
  const router = useRouter()
  const [order, setOrder] = useState<number>(1)
  const handleNext = () => {
    console.log(order)
    if (order === 4) {
      router.push('/input')
    } else {
      setOrder((prev) => prev + 1)
    }
  }
  return (
    <>
      <button
        type="button"
        onClick={handleNext}
        className={`${order === 1 ? 'block' : 'hidden'}`}
      >
        <FirstRending />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className={`${order === 2 ? 'block' : 'hidden'} animate-fade-up`}
      >
        <SecondRending />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className={`${order === 3 ? 'block' : 'hidden'} animate-fade-up`}
      >
        <ThirdRendering />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className={`${order === 4 ? 'block' : 'hidden'} animate-fade-up`}
      >
        <FifthRendering />
      </button>
    </>
  )
}

export default Rendering
