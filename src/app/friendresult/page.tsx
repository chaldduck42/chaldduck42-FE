'use client'
import { Suspense, useState, useEffect } from 'react'
import Charts from '@/components/charts/Charts'
import { useSearchParams } from 'next/navigation'
import useObserver from '@/hooks/useObserver'
import Image from 'next/image'
import axios from 'axios'
import { captureResult } from '@/utils/captureResult'
import Download from '../../../public/svgs/download.svg'

interface IapiData {
  fiveHang: string
  description: string
}

const Home = () => {
  const searchParams = useSearchParams()

  const [apiData, setApiData] = useState<IapiData>()
  const bg = searchParams.get('bg')
  const fruits = searchParams.get('fruits')

  useEffect(() => {
    const getApiData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/saju/result/갑자`,
      )
      const responseData = response.data
      setApiData(responseData)
    }
    getApiData()
  }, [])

  // 리팩토링 예정
  const observer1 = useObserver()
  const observer2 = useObserver()
  const observer3 = useObserver()
  const observer4 = useObserver()
  const observer6 = useObserver()
  const observer7 = useObserver()
  const observer8 = useObserver()
  const observer9 = useObserver()
  const observer10 = useObserver()

  return (
    <div className=" flex flex-col items-center font-[Pretendard-Regular]">
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className="relative flex flex-col items-center sm:mx-auto sm:w-full md:w-[600px] bg-no-repeat pb-[30px]"
          style={{ backgroundImage: `url('/images/bg/${bg}.png')` }}
          id="capture-area"
        >
          <div
            ref={observer1.ref}
            className={`${observer1.animationAppear} w-[40px] h-[40px] absolute top-4 left-4`}
            aria-hidden="true"
          >
            <Image
              src="/images/menu/hamburger.png"
              alt="hamburger"
              fill
              sizes="(max-width: 348px) 348px, 287px"
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </div>
          <div className="h-[90px]" />
          <div
            ref={observer2.ref}
            className={`${observer2.animationAppear} flex flex-col items-center`}
          >
            <div className="text-[18px] font-bold text-Dark-Brown">
              썸머님은{apiData?.description}
            </div>
            <div className="text-[24px] font-bold text-Dark-Brown">
              리더십 있는
            </div>
            <div className="text-[24px] font-bold text-Dark-Brown">
              메론 자두 찹쌀떡
            </div>
          </div>
          <div
            ref={observer3.ref}
            className={`${observer3.animationAppear} w-[375px] h-[309px] relative mb-[44px]`}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Image
                src={`/images/fruits/${fruits}.png`}
                alt="fruits"
                fill
                sizes="(max-width: 348px) 348px, 287px"
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </Suspense>
          </div>
          <div
            ref={observer4.ref}
            className={`${observer4.animationAppear}  rounded-2xl p-4 bg-Background-Beige3/40 w-[335px] border-[1px] border-Background-Beige3 leading-[25.6px]`}
          >
            당신은 태양 중에서도 한낮에 떠있는 가장 뜨거운 태양이에요. 한번 정한
            목표에 대해 집중력이 뛰어나고 달성하기까지 곁길로 새지 않아요. 이런
            진취성은 당신의 가장 큰 강점이에요. 일에 있어선 다른 사람의 평가에
            연연하지 않고 스스로 동기 부여하는 성향이에요. 시키지 않아도 알아서
            척척하기 때문에 오히려 시키면 하기 싫어지는 청개구리 마음도 있군요.
            팀플레이보단 혼자 일 할 때 더 효율적인 편이에요. 또, 실패를 겪어도
            회복이 빨라요. 당신 안의 태양은 당신의 일상에 끊임없는 열정을
            부여하기 때문이죠.
          </div>
        </div>
      </Suspense>
      <div className="relative flex flex-col items-center sm:mx-auto sm:w-full md:w-[600px]">
        <div
          ref={observer9.ref}
          className={`${observer9.animationAppear} relative flex flex-col items-center sm:mx-auto sm:w-full md:w-[600px]`}
        >
          <div className="w-[335px] mt-[20px] flex flex-col items-center text-centerrounded-2xl py-6">
            <p className="mb-[10px] font-bold text-Dark-Brown text-[20px]">
              썸머 & 찰떡이
            </p>
            <p className="mt-4 font-medium text-Dark-Brown text-[20px]">
              <span className="font-bold bg-Secondary-Grpae p-4 rounded-lg">
                꽤 좋은 사이야
              </span>
            </p>
          </div>
        </div>
        <div
          ref={observer6.ref}
          className={`${observer6.animationAppear} flex`}
        >
          <Charts
            percentage={80}
            color="#F69877"
            hollowColor="#FDEAE3"
            content="MBTI"
            starCount={4}
          />
          <Charts
            percentage={60}
            color="#C1E37E"
            hollowColor="#F3F9E4"
            content="사주"
            starCount={3}
          />
        </div>
        <div
          ref={observer10.ref}
          className={`${observer10.animationAppear} relative flex flex-col items-center sm:mx-auto sm:w-full md:w-[600px]`}
        >
          <div className="w-[335px] mt-[20px] flex flex-col items-center bg-Background-Beige3 rounded-2xl py-6">
            <p className="mb-[10px] font-medium text-Dark-Brown p-4 text-[18px]">
              썸머님은 독고다이 망고 메론 찹쌀떡이에요. 정열적인 딸기 사과
              찹쌀떡인 보보보보보님과는 성격보다는 타고난 궁합이 더 좋아요. 이미
              충분히 사이가 좋지만, 더 친해질 수 있는 가능성이 남았어요!
            </p>
          </div>
        </div>
        <div
          ref={observer7.ref}
          className={`${observer7.animationAppear} relative flex flex-col items-center sm:mx-auto sm:w-full md:w-[600px]`}
        >
          <p className="mt-[80px] font-bold text-[20px] text-Dark-Brown">
            잠깐!
          </p>
          <p className="font-bold text-[20px] text-Dark-Brown">
            나의 MBTI와 사주 궁합,
          </p>
          <p className="font-bold text-[20px] text-Dark-Brown">
            친구랑 같이 보고 싶다면?
          </p>
          <p className="mt-[10px] font-medium text-[14px] text-Brown">
            친구에게 카카오톡으로 공유하면
          </p>
          <p className="font-medium text-[14px] text-Brown">
            찰떡사이가 친구랑 MBTI와 사주 궁합을
          </p>
          <p className="mb-[20px] font-medium text-[14px] text-Brown">
            비교해서 알려드려요.
          </p>
        </div>
        <div
          ref={observer8.ref}
          className={`${observer8.animationAppear} relative flex flex-col items-center sm:mx-auto sm:w-full md:w-[600px]`}
        >
          <p className="mt-[80px] font-bold text-[20px] text-Dark-Brown">
            보보보보보님,
          </p>
          <p className="font-bold text-[20px] text-Dark-Brown">
            다른 친구랑도 찰떡궁합일지
          </p>
          <p className="font-bold text-[20px] text-Dark-Brown">
            궁합 보기 어때요?
          </p>
        </div>

        <div className="my-[32px] w-[335px] px-6 py-4 bg-Dark-Brown rounded-2xl text-white text-center">
          다른 친구와 궁합 보기
        </div>
        <div className="my-[32px] flex items-center justify-center text-Gray font-bold space-x-2">
          <span>위 버튼을 클릭하면 나만의 고유 링크가 생성돼요.</span>
        </div>
        <button
          type="button"
          onClick={captureResult}
          className="my-[32px] flex items-center justify-center text-Dark-Brown underline font-bold space-x-2"
        >
          <Download width={20} height={20} className="inline-block" />
          <span>결과 이미지로 저장</span>
        </button>
      </div>
    </div>
  )
}

export default Home
