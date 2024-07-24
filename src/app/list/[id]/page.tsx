'use client'
import { Suspense, useState, useEffect } from 'react'
import React from 'react'
import useObserver from '@/hooks/useObserver'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

//import RelationshipTag from './layout'

// 인터페이스 정의
interface Parameters {
  resultMbti: string
  resultSazu: string
}

const Home = () => {
  const searchParams = useSearchParams()
  const resultMbti = searchParams.get('mbti')
  const resultSazu = searchParams.get('sazu')

  const observer1 = useObserver()
  const observer2 = useObserver()

  const [relationships, setRelationships] = useState<
    Array<{
      type: 'best' | 'good' | 'ambiguous' | 'mediocre' | 'mismatched'
      text: string
    }>
  >([])

  useEffect(() => {
    // This is where you would normally fetch data from an API
    // For this example, we'll just set some mock data
    setRelationships([
      { type: 'best', text: '찰떡사이야' },
      { type: 'good', text: '꽤 좋은 사이야' },
      { type: 'ambiguous', text: '애매한 사이야' },
      { type: 'mediocre', text: '그저그런 사이야' },
      { type: 'mismatched', text: '엇갈린 사이야' },
    ])
  }, [])

  return (
    <div className="bg-Background-Beige1 flex flex-col items-center font-[Pretendard-Regular]">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative flex flex-col items-center sm:mx-auto sm:w-full md:w-[600px] bg-no-repeat pb-[30px]">
          <div
            ref={observer1.ref}
            className={`${observer1.animationAppear} flex flex-col items-center`}
            aria-hidden="true"
          >
            <div className="flex space-x-4  mt-4">
              <div>
                <Image
                  src="/images/menu/hamburger.png"
                  alt="hamburger"
                  width={50}
                  height={50}
                  style={{ objectFit: 'scale-down' }}
                  priority={true}
                />
              </div>
              <div>
                <Image
                  src="/images/menu/hamburger.png"
                  alt="hamburger"
                  width={50}
                  height={50}
                  style={{ objectFit: 'scale-down' }}
                  priority={true}
                />
              </div>
              <div>
                <Image
                  src="/images/menu/hamburger.png"
                  alt="hamburger"
                  width={50}
                  height={50}
                  style={{ objectFit: 'scale-down' }}
                  priority={true}
                />
              </div>
            </div>
            <div className="text-[24px] font-bold">
              어떤 친구가 나랑 궁합을 봤을까?
            </div>
          </div>
          <div className="h-[90px]" />
          <div
            ref={observer2.ref}
            className={`${observer2.animationAppear} flex flex-col items-center`}
          >
            <div className="text-[13px] text-gray-500">
              결과는 최대 5개까지만 저장됩니다.
            </div>
            <div className="text-[13px] text-gray-500">
              친구와의 궁합 결과를 더 오래 기억하고 싶다면
            </div>
            <div className="text-[13px] text-gray-500">
              '자세히'를 눌러 이미지로 저장해보세요
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default Home
