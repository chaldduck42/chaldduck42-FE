'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Image1 from '../../../public/images/rending/third/fruit1.png'
import Image2 from '../../../public/images/rending/third/fruit2.png'
import Image3 from '../../../public/images/rending/third/fruit3.png'
import Image4 from '../../../public/images/rending/third/fruit4.png'
import Image5 from '../../../public/images/rending/third/fruit5.png'
import Image6 from '../../../public/images/rending/third/fruit6.png'
import Image7 from '../../../public/images/rending/third/fruit7.png'
import Image8 from '../../../public/images/rending/third/fruit8.png'
import Image9 from '../../../public/images/rending/third/fruit9.png'
import Image10 from '../../../public/images/rending/third/fruit10.png'
import Bowl from '../../../public/images/rending/third/bowl.png'

const ThirdRendering = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 300) // 0.3초마다 실행

    return () => clearInterval(intervalId)
  }, [images.length])

  return (
    <div className="bg-[#FDFAF5] h-screen min-w-[375px] max-[600px] flex flex-col  items-center animate-fade pt-[179px] overflow-hidden">
      <div className="flex flex-col items-center text-[18px] font-bold mb-[62px] animate-fade-up">
        <p>먼저 과일 찹쌀떡으로</p>
        <p>타고난 너의 기질인 사주를 알려줄게</p>
      </div>
      <div className="w-full h-full relative animate-fade-up">
        <Image
          src={images[currentImage]}
          alt="과일 사진"
          style={{ width: 256, height: 213 }}
          className="absolute right-1/2 translate-x-1/2"
        />
        <Image
          src={Bowl}
          alt="그릇"
          style={{ width: 320, height: 95 }}
          className="absolute right-1/2 translate-x-1/2 top-36"
        />
      </div>
    </div>
  )
}

export default ThirdRendering
