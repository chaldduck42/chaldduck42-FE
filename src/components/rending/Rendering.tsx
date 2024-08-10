'use client'

import React, { useState } from 'react'
import FirstRending from './FirstRendering'
import SecondRending from './SecondRendering'
import ThirdRendering from './ThirdRendering'
import FifthRendering from './FifthRendering'

const Rendering = () => {
  const [order, setOrder] = useState<number>(1)
  const handleNext = () => {
    if (order === 4) {
      console.log('넘기기')
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
