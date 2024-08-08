import Image from 'next/image'
import Link from 'next/link'
import RendingFruit from '../../public/images/rending/redingFruit.png'
import Ducck from '../../public/svgs/dduck.svg'
import Menu from '../../public/svgs/menu.svg'

const Home = () => {
  return (
    <div className="  flex flex-col items-center justify-between ">
      <div className="bg-gradient-to-b from-[#F0D9B8] to-[#FDFAF5] h-screen min-w-[375px] max-[600px] pt-[22px] flex flex-col justify-between items-center">
        <div>
          <div className="flex w-full justify-between px-[16px]">
            <Ducck />
            <Menu />
          </div>
          <div className="mt-[74px] flex flex-col items-center text-Dark-Brown font-bold">
            <p className="text-[18px] font-pretendards ">테스트용인데</p>
            <p className="text-[18px] font-sans">
              사주와 성격으로 보는 우리 궁합
            </p>
            <p className="text-[24px]">우리 찰떡궁합일까?</p>
          </div>
          <Image
            src={RendingFruit}
            alt="과일바구니 사진"
            className="mt-[89px]"
          />
        </div>
        <Link
          href="/input"
          className="w-[335px] h-[56px] bg-Dark-Brown text-white hover:bg-brown rounded-[16px] flex items-center justify-center mb-[44px] font-pretendard"
        >
          내 사주 알아보기
        </Link>
      </div>
    </div>
  )
}

export default Home
