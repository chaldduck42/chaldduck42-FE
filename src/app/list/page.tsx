'use client'
import { Suspense, useState, useEffect } from 'react'
import React from 'react'
import useObserver from '@/hooks/useObserver'
import Image from 'next/image'
import RelationshipTag from '@/components/list/RelationshipTag'
import NoCompatibilityMessage from '@/components/list/NoCompatibilityMessage'
import axios from 'axios'

//import RelationshipTag from './layout'
interface HomeProps {
  reqData: object // 서버에서 받아온 데이터를 여기에 저장
}

interface listResp {
  userId: string
  nickname: string
  birth: string
  sajuDescription: string
  sajuImg: string
  mbtiDescription: string
  mbtiImg: string
}

const Home: React.FC<HomeProps> = () => {
  const [reqData, setReqData] = useState<listResp>()

  const observer1 = useObserver()
  const observer2 = useObserver()
  const observer3 = useObserver()

  const [relationships, setRelationships] = useState<
    Array<{
      type: 'best' | 'good' | 'ambiguous' | 'mediocre' | 'mismatched'
      text: string
    }>
  >([])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/friend/list/${process.env.DUMMY_USR_HASH}`,
        //`http://3.35.133.186:8080/api/api/friend/list/b3D6dDe7SQ`,
      )
      setReqData(response.data)
    } catch (err) {
      console.error('Error fetching data:', err)
    }
  }

  useEffect(() => {
    setRelationships([
      { type: 'best', text: '찰떡사이야' },
      { type: 'good', text: '꽤 좋은 사이야' },
      { type: 'ambiguous', text: '애매한 사이야' },
      { type: 'mediocre', text: '그저그런 사이야' },
      { type: 'mismatched', text: '엇갈린 사이야' },
    ])

    fetchData()
  }, [])

  return (
    <div className="bg-Background-Beige1 flex flex-col items-center font-[Pretendard-Regular]">
      <pre>{JSON.stringify(reqData, null, 2)}</pre>
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
            <div className=" left-[94px] top-[91px] text-base font-bold text-center text-[#2b1e08]">
              <p>어떤 친구가 나랑 궁합 봤을까?</p>
            </div>
          </div>

          <div
            ref={observer2.ref}
            className={`${observer2.animationAppear} flex flex-col justify-start items-start left-6 top-[173px] gap-4`}
          >
            <RelationshipTag
              friendNm="친구1"
              particle="이랑"
              type="best"
              children="찰떡사이야"
            />
            <RelationshipTag
              friendNm="친구2"
              particle="이랑"
              type="good"
              children="꽤 좋은 사이야"
            />
            <RelationshipTag
              friendNm="친구3"
              particle="이랑"
              type="ambiguous"
              children="애매한 사이야"
            />
            <RelationshipTag
              friendNm="친구4"
              particle="이랑"
              type="mediocre"
              children="그저그런 사이야"
            />
            <RelationshipTag
              friendNm="친구5"
              particle="랑"
              type="mismatched"
              children="엇갈린 사이야"
            />
            <NoCompatibilityMessage />
          </div>

          <div
            ref={observer3.ref}
            className={`${observer3.animationAppear} flex flex-col items-center`}
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

// `getServerSideProps` 함수를 사용하여 서버 측에서 데이터를 가져옵니다.
// export const getServerSideProps = async () => {
//   let reqData = null

//   try {
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/friend/list/${process.env.DUMMY_USR_HASH}`,
//     )
//     reqData = response.data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//   }

//   return {
//     props: {
//       reqData,
//     },
//   }
// }

export default Home
