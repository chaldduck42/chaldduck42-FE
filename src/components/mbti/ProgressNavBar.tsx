import { usePathname } from 'next/navigation'
import React from 'react'

const ProgressNavBar = () => {
  const router = usePathname()
  const pageNum = parseInt(router.split('/')[2], 10)
  const barWidth = `${(pageNum / 12) * 100}%` // 비율을 퍼센트로 변환

  return (
    <div className="w-full">
      <div className="flex justify-between text-Dark-Brown">
        <p className="font-bold text-lg mb-3">{pageNum}/12</p>
        {pageNum === 6 && <p className="font-bold">벌써 절반이야</p>}
        {pageNum === 12 && <p className="font-bold">마지막 문항이야</p>}
      </div>
      <div className="w-full bg-[#EBE6DF] h-4 rounded-2xl relative">
        <div
          style={{ width: barWidth }}
          className="bg-Dark-Brown h-4 rounded-2xl absolute"
        />
      </div>
    </div>
  )
}

export default ProgressNavBar
