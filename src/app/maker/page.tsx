import Image from 'next/image'
import React from 'react'
import Maker from '../../../public/images/maker/makers.png'

const page = () => {
  return (
    <div className="h-full overflow-y-hidden">
      <Image alt="만든 사람들 페이지 이미지" src={Maker} />
    </div>
  )
}

export default page
