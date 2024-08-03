import Image from 'next/image'
import React from 'react'
import ErrorImg from '../../public/images/error/Error.png'

const NotFound = () => {
  return (
    <div className="h-full overflow-y-hidden flex flex-col pt-[154px]">
      <Image src={ErrorImg} alt="에러 페이지 이미지" />
      <div className="text-[16px] text-[#858585] mt-[34px] flex flex-col items-center">
        <p>에러가 발생했어요.</p>
        <p>잠시 후 다시 접속해주세요.</p>
      </div>
    </div>
  )
}

export default NotFound
