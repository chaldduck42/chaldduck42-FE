import React from 'react'
import Image from 'next/image'
import RenderingImage1 from '../../../public/images/rending/second_rendering_Image_1.png'
import RenderingImage2 from '../../../public/images/rending/second_rendering_Image_2.png'

const SecondRending = () => {
  return (
    <div className="bg-[#FDFAF5] h-screen min-w-[375px] max-[600px] flex flex-col  items-center animate-fade pt-[136px]">
      <div className="flex flex-col items-center text-[18px] font-bold mb-[62px] animate-fade-up">
        <p>사주와 MBTI 궁합은</p>
        <p>과연 비슷할까?</p>
      </div>
      <div className="relative w-[375px] h-screen overflow-hidden">
        <div className="absolute left-0 z-20 animate-fade-right ">
          <Image src={RenderingImage1} alt="렌딩 페이지 이미지" />
        </div>
        <div className="absolute z-10 right-0 animate-fade-left">
          <Image
            src={RenderingImage2}
            alt="렌딩 페이지 이미지"
            className="fill-inherit"
          />
        </div>
      </div>
    </div>
  )
}

export default SecondRending
