'use client'
import { Suspense } from 'react'
import React from 'react'
import useObserver from '@/hooks/useObserver'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'

// 인터페이스 정의
interface FormState {
  resultMbti: string
  resultSazu: string
}

const Home = () => {
  return (
    <div class="w-[375px] h-[740px] relative overflow-hidden bg-[#fdfaf5]">
      <p class="absolute left-[79px] top-[635px] text-xs text-center text-[#858585]">
        <span class="text-xs text-center text-[#858585]">
          결과는 최대 5개까지만 저장됩니다.
        </span>
        <br />
        <span class="text-xs text-center text-[#858585]">
          친구와의 궁합 결과를 더 오래 기억하고 싶다면{' '}
        </span>
        <br />
        <span class="text-xs text-center text-[#858585]">
          ‘자세히’를 눌러 이미지로 저장해 보세요.
        </span>
      </p>
      <p class="absolute left-[94px] top-[91px] text-base font-bold text-center text-[#2b1e08]">
        어떤 친구가 나랑 궁합 봤을까?
      </p>
      <div class="flex flex-col justify-start items-start absolute left-6 top-[173px] gap-4">
        <li class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[327px] px-4 py-5 rounded-2xl bg-[#fbf4ea]">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
                  예림이
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#2b1e08]">
                  랑
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-xl bg-[#f69877]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#2b1e08]">
                찰떡사이야
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[57px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-400">
              자세히
            </p>
          </div>
        </li>
        <li class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[327px] px-4 py-5 rounded-2xl bg-[#fbf4ea]">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
                  우키
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#2b1e08]">
                  랑
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-xl bg-[#bab4d2]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#2b1e08]">
                꽤 좋은 사이야
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[57px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-400">
              자세히
            </p>
          </div>
        </li>
        <li class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[327px] px-4 py-5 rounded-2xl bg-[#fbf4ea]">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
                  영덕
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#2b1e08]">
                  이랑
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-xl bg-[#c1e37e]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#2b1e08]">
                애매한 사이야
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[57px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-400">
              자세히
            </p>
          </div>
        </li>
        <li class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[327px] px-4 py-5 rounded-2xl bg-[#fbf4ea]">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
                  상연상연상
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#2b1e08]">
                  이랑
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-xl bg-[#f9de78]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#2b1e08]">
                그저그런 사이야
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[57px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-400">
              자세히
            </p>
          </div>
        </li>
        <li class="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[327px] px-4 py-5 rounded-2xl bg-[#fbf4ea]">
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
              <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
                <p class="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
                  보보
                </p>
                <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#2b1e08]">
                  랑
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-xl bg-[#97b3da]">
              <p class="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#2b1e08]">
                엇갈린 사이야
              </p>
            </div>
          </div>
          <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[57px] relative">
            <p class="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-400">
              자세히
            </p>
          </div>
        </li>
      </div>
    </div>
  )
}

export default Home
