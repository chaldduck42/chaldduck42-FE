'use client'

import Image from 'next/image'
import ResultPage from '../../../public/images/rending/resultPage.png'

const FifthRendering = () => {
  return (
    <div className="bg-[#FDFAF5] h-screen min-w-[375px] max-[600px] flex flex-col  items-center animate-fade pt-[59px] overflow-hidden">
      <div className="flex flex-col items-center text-[18px] font-bold mb-[38px] animate-fade-up">
        <p>내 성격 테스트로</p>
        <p>친구와 나의 궁합까지 알 수 있어!</p>
      </div>
      <Image
        src={ResultPage}
        alt="결과 사진"
        style={{ width: 297, height: 505 }}
        className="animate-fade-up"
      />
    </div>
  )
}

export default FifthRendering
