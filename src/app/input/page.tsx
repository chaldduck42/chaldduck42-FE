'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
// import axios from 'axios'

// 인터페이스 정의
interface FormState {
  nickname: string
  nicknameComplete: boolean
  birthdate: string
  birthdateComplete: boolean
  error: boolean
  canStart: boolean
  isTyping: boolean
  isNicknameFocused: boolean
  isBirthdateFocused: boolean
}

const Home: React.FC = () => {
  const router = useRouter()

  // 상태 정의
  const [state, setState] = useState<FormState>({
    nickname: '',
    nicknameComplete: false,
    birthdate: '',
    birthdateComplete: false,
    error: false,
    canStart: false,
    isTyping: false,
    isNicknameFocused: false,
    isBirthdateFocused: false,
  })

  const nicknameRef = useRef<HTMLInputElement>(null)
  const birthdateRef = useRef<HTMLInputElement>(null)

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    const koreanCharRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/

    if (koreanCharRegex.test(input) && input.length <= 5) {
      setState((prevState) => ({
        ...prevState,
        nickname: input,
        nicknameComplete: true,
      }))
    } else if (!koreanCharRegex.test(input)) {
      event.target.focus()
      alert('한글만 입력하실 수 있습니다.')
    }
  }

  const handleBirthdateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let input = event.target.value.replace(/[^\d]/g, '')
    if (input.length > 8) {
      input = input.slice(0, 8)
    }
    setState((prevState) => ({
      ...prevState,
      birthdate: input,
      birthdateComplete: input.length === 8,
    }))
  }

  const handleBirthdateBlur = () => {
    setState((prevState) => ({
      ...prevState,
      isTyping: false,
      isBirthdateFocused: false,
    }))
    const input = state.birthdate.replace(/[^\d]/g, '')
    if (input.length <= 4) {
      setState((prevState) => ({ ...prevState, birthdate: input }))
    } else if (input.length <= 6) {
      setState((prevState) => ({
        ...prevState,
        birthdate: `${input.slice(0, 4)}.${input.slice(4, 6)}`,
      }))
    } else {
      setState((prevState) => ({
        ...prevState,
        birthdate: `${input.slice(0, 4)}.${input.slice(4, 6)}.${input.slice(6, 8)}`,
        birthdateComplete: input.length === 8,
      }))
    }
  }

  const handleNicknameBlur = () => {
    setState((prevState) => ({
      ...prevState,
      isTyping: false,
      isNicknameFocused: false,
    }))
  }

  const handleInputFocus = (setFocusState: keyof FormState) => () => {
    setState((prevState) => ({
      ...prevState,
      isTyping: true,
      [setFocusState]: true,
    }))
  }

  const handleStartClick = () => {
    if (state.nickname === '' || state.birthdate === '') {
      setState((prevState) => ({ ...prevState, error: true }))
    } else {
      setState((prevState) => ({ ...prevState, error: false }))
    }
  }

  const handleNextClick = async () => {
    if (state.nickname === '' || state.birthdate === '') {
      if (state.nickname === '') {
        nicknameRef.current?.focus()
      } else if (state.birthdate === '') {
        birthdateRef.current?.focus()
      }
      alert('닉네임과 생년월일을 모두 입력해 주세요.')
    } else if (state.birthdate.replaceAll('.', '').length < 8) {
      birthdateRef.current?.focus()
      alert('생년월일을 잘못 입력하셨습니다.')
    } else if (state.nicknameComplete && state.birthdateComplete) {
      const sendData = {
        nickname: state.nickname,
        birth: state.birthdate.replaceAll('.', ''),
      }

      try {
        // const response = await axios.post(
        //   `${process.env.NEXT_PUBLIC_BASE_URL}/user/info`,
        //   sendData,
        // )

        localStorage.setItem('userInfo', JSON.stringify(sendData))
        router.push('/mbti/1')
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      canStart: state.nickname !== '' || state.birthdate !== '',
    }))
  }, [state.nickname, state.birthdate])

  return (
    <div className="w-[375px] h-full relative overflow-hidden bg-gradient-to-b from-[#f9efe1] to-[#fdfaf5]">
      <button
        type="button"
        className={`flex justify-center items-center w-[335px] absolute left-5 top-[513px] gap-2.5 px-6 py-4 rounded-2xl ${state.canStart ? 'bg-[#2b1e08]' : 'bg-[#c2c2c2]'}`}
        onClick={state.canStart ? handleNextClick : handleStartClick}
      >
        <p className="flex-grow w-[287px] h-6 text-base font-bold text-center text-white">
          {state.canStart ? '시작하기' : '내 친구와 궁합보기'}
        </p>
      </button>
      <div className="flex flex-col justify-start items-start absolute left-5 top-[213px] gap-6">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
            닉네임
          </p>
          <div
            className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-[335px] h-11 relative gap-[110px] px-3 py-2.5 rounded-xl bg-[#fdfaf5] border ${state.isNicknameFocused || state.nickname ? 'border-[#2b1e08]' : 'border-[#c2c2c2]'}`}
          >
            <input
              ref={nicknameRef}
              type="text"
              placeholder="한글 5자 이하"
              value={state.nickname}
              onChange={handleNicknameChange}
              onFocus={handleInputFocus('isNicknameFocused')}
              onBlur={handleNicknameBlur}
              className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-left bg-transparent border-none focus:outline-none ${state.isNicknameFocused || state.nickname ? 'text-[#2b1e08]' : 'text-neutral-400'}`}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
            생년월일
          </p>
          <div
            className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-[335px] h-11 relative gap-[110px] px-3 py-2.5 rounded-xl bg-[#fdfaf5] border ${state.isBirthdateFocused || state.birthdate ? 'border-[#2b1e08]' : 'border-[#c2c2c2]'}`}
          >
            <input
              ref={birthdateRef}
              type="text"
              placeholder="2000.01.01"
              value={state.birthdate}
              onChange={handleBirthdateChange}
              onFocus={handleInputFocus('isBirthdateFocused')}
              onBlur={handleBirthdateBlur}
              className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-left bg-transparent border-none focus:outline-none ${state.isBirthdateFocused || state.birthdate ? 'text-[#2b1e08]' : 'text-neutral-400'}`}
            />
          </div>
        </div>
      </div>
      <p className="absolute left-[68px] top-[106px] text-lg font-bold text-center text-[#2b1e08]">
        먼저 닉네임과 태어난 날을 알려줘!
      </p>
      {!state.canStart &&
        (state.error ? (
          <p className="absolute left-[76px] top-[593px] text-base text-center text-[#858585]">
            닉네임과 생년월일을 확인해 주세요.
          </p>
        ) : (
          <p className="absolute left-[94px] top-[593px] text-sm text-center text-[#858585]">
            <span className="text-sm text-center text-[#858585]">
              실명보다는 나와 친구만 알 수 있는
            </span>
            <br />
            <span className="text-sm text-center text-[#858585]">
              닉네임을 입력하길 권장할게요.
            </span>
          </p>
        ))}
    </div>
  )
}

export default Home
