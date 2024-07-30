import React from 'react'
import Ducck from '../../../public/svgs/dduck.svg'

const page = () => {
  return (
    <div className="h-full overflow-y-hidden text-Dark-Brown">
      <div className="mt-[144px] flex flex-col items-center">
        <Ducck />
        <p className="text-[18px] leading-[160%]">만든 사람들</p>
        <div className="flex text-[14px] mt-[16px]">
          <div>
            <p>보보 🍎</p>
            <p>영덕 🍑</p>
            <p>우키 🫐</p>
          </div>
          <div className="ml-[8px]">
            <p>썸머 🍋</p>
            <p>상연 🍇</p>
            <p>예림 🥝</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[88px]">
        <Ducck />
        <p className="text-[18px] leading-[160%]">건의/요청하기</p>
        <p className="text-[14px] mt-[16px] underline">chaldduck42@gmail.com</p>
        <div className="text-[12px] text-Gray5 flex flex-col items-center mt-[48px] tracking-[-0.005em]">
          <p>사주의 결과는 일주를 기반으로 한 결과임으로</p>
          <p>정확하지 않을 수 있습니다.</p>
          <p>AI를 활용하여 데이터 수집과 가공을 진행했습니다.</p>
        </div>
      </div>
    </div>
  )
}

export default page
