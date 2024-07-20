import Image from 'next/image'
import React from 'react'
import ErrorImg from '../../public/images/error/Error.png'

const NotFound = () => {
  return (
    <div className="h-full overflow-y-hidden">
      <Image src={ErrorImg} alt="에러 페이지 이미지" />
    </div>
  )
}

export default NotFound
