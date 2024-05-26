'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Sample from '../../../public/images/sample.png'

const Home = () => {
  const searchParams = useSearchParams()
  const mbti = searchParams.get('mbti')
  console.log(mbti, 'mbti')
  console.log(searchParams, 'searchParams')

  return (
    <div className="bg-Background-Beige1 flex flex-col items-center font-[Pretendard-Regular]">
      <div className="flex flex-col items-center sm:mx-auto bg-gradient-to-b from-Secondary-Red to-transparent sm:w-full md:w-[600px]">
        <div className="h-[90px]" />
        <div className="flex flex-col items-center">
          <div className="text-[18px]">썸머님은</div>
          <div className="text-[24px]">리더십 있는</div>
          <div className="text-[24px]">메론 자두 찹쌀떡</div>
        </div>
        <div className="w-[348px] h-[287px] relative">
          <Image
            src={Sample}
            alt="Sample"
            fill
            sizes="(max-width: 348px) 348px, 287px"
            style={{ objectFit: 'cover' }}
            priority={true}
          />
        </div>
        <div className="rounded-2xl p-4 bg-Background-Beige3/40 w-[335px] border-[1px] border-Background-Beige3 leading-[25.6px]">
          당신은 태양 중에서도 한낮에 떠있는 가장 뜨거운 태양이에요. 한번 정한
          목표에 대해 집중력이 뛰어나고 달성하기까지 곁길로 새지 않아요. 이런
          진취성은 당신의 가장 큰 강점이에요. 일에 있어선 다른 사람의 평가에
          연연하지 않고 스스로 동기 부여하는 성향이에요. 시키지 않아도 알아서
          척척하기 때문에 오히려 시키면 하기 싫어지는 청개구리 마음도 있군요.
          팀플레이보단 혼자 일 할 때 더 효율적인 편이에요. 또, 실패를 겪어도
          회복이 빨라요. 당신 안의 태양은 당신의 일상에 끊임없는 열정을 부여하기
          때문이죠.
        </div>
      </div>
      <div>
        <a href="/">처음으로</a>
        <div>내 결과를 조회하는 페이지 입니다</div>
        <div>카카오톡으로 공유하기</div>
        <div>링크복사</div>
        <div>이미지저장</div>
      </div>
    </div>
  )
}

export default Home
