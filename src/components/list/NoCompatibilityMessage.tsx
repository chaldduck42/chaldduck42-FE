import React from 'react'

const NoCompatibilityMessage: React.FC = () => {
  const handleCopyLink = () => {
    const link = window.location.href // 현재 페이지의 링크
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert('링크가 복사되었습니다!')
      })
      .catch((err) => {
        console.error('링크 복사 실패: ', err)
      })
  }

  return (
    <div className="flex flex-col justify-center items-center w-[327px] h-[414px] relative gap-8 px-4 py-5 rounded-2xl bg-[#fbf4ea]">
      <div className="flex-grow-0 flex-shrink-0 w-[205px] h-[78px]">
        <p className="left-[62.5px] top-[124px] text-base font-bold text-left text-[#5c5c5c]">
          아직 나랑 궁합 본 친구가 없어요.
        </p>
        <p className="left-[61px] top-[158px] text-sm text-center text-[#5c5c5c]">
          <span className="text-sm text-center text-[#5c5c5c]">
            친구에게 나와 궁합 볼 수 있는 링크를{' '}
          </span>
          <br />
          <span className="text-sm text-center text-[#5c5c5c]">
            공유해 보세요.
          </span>
        </p>
      </div>
      <div
        className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[174px] relative gap-2.5 px-6 py-4 rounded-2xl 
                 border border-[#2b1e08] hover:border-2 transition-all duration-100 cursor-pointer"
        onClick={handleCopyLink}
      >
        <p className="flex-grow w-[126px] h-6 text-base font-bold text-center text-[#2b1e08]">
          링크 복사하기
        </p>
      </div>
    </div>
  )
}

export default NoCompatibilityMessage
