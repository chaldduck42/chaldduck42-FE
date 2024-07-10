// 'use client'
// import React, { useState, useEffect, useRef } from 'react'
// import { useRouter } from 'next/navigation'

// const Home = () => {
//   const router = useRouter()
//   const [nickname, setNickname] = useState('')
//   const [nicknameComplete, setNicknameComplete] = useState(false)
//   const [birthdate, setBirthdate] = useState('')
//   const [birthdateComplete, setBirthdateComplete] = useState(false)
//   const [error, setError] = useState(false)
//   const [canStart, setCanStart] = useState(false)
//   const [isTyping, setIsTyping] = useState(false)
//   const [isNicknameFocused, setIsNicknameFocused] = useState(false)
//   const [isBirthdateFocused, setIsBirthdateFocused] = useState(false)

//   const nicknameRef = useRef(null)
//   const birthdateRef = useRef(null)

//   const handleNicknameChange = (event) => {
//     const input = event.target.value
//     const koreanCharRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/ // 한글만 허용하는 정규 표현식

//     if (koreanCharRegex.test(input) && input.length <= 5) {
//       setNickname(input)
//       setNicknameComplete(true)
//     } else if (!koreanCharRegex.test(input)) {
//       event.target.focus()
//       alert('한글만 입력하실 수 있습니다.')
//     }
//   }

//   const handleBirthdateChange = (event) => {
//     let input = event.target.value.replace(/[^\d]/g, '')
//     if (input.length > 8) {
//       input = input.slice(0, 8)
//     }
//     setBirthdate(input)
//     setBirthdateComplete(input.length === 8)
//   }

//   const handleBirthdateBlur = () => {
//     setIsTyping(false)
//     setIsBirthdateFocused(false)
//     let input = birthdate.replace(/[^\d]/g, '')
//     if (input.length <= 4) {
//       setBirthdate(input)
//     } else if (input.length <= 6) {
//       setBirthdate(`${input.slice(0, 4)}.${input.slice(4, 6)}`)
//     } else {
//       setBirthdate(
//         `${input.slice(0, 4)}.${input.slice(4, 6)}.${input.slice(6, 8)}`,
//       )
//       setBirthdateComplete(input.length === 8)
//     }
//   }

//   const handleNicknameBlur = () => {
//     setIsTyping(false)
//     setIsNicknameFocused(false)
//   }

//   const handleInputFocus = (setFocusState) => () => {
//     setIsTyping(true)
//     setFocusState(true)
//   }

//   const handleStartClick = () => {
//     if (nickname === '' || birthdate === '') {
//       setError(true)
//     } else {
//       setError(false)
//     }
//   }

//   const getRelationship = (name) => {
//     if (typeof name !== 'string') return null

//     var lastLetter = name[name.length - 1]
//     var uni = lastLetter.charCodeAt(0)

//     if (uni < 44032 || uni > 55203) return null

//     return (uni - 44032) % 28 !== 0
//   }

//   const handleNextClick = () => {
//     if (nickname === '' || birthdate === '') {
//       if (nickname === '') {
//         nicknameRef.current.focus()
//       } else if (birthdate === '') {
//         birthdateRef.current.focus()
//       }
//       alert('닉네임과 생년월일을 모두 입력해 주세요.')
//     } else if (birthdate.length < 8) {
//       birthdateRef.current.focus()
//       alert('생년월일을 잘못 입력하셨습니다.')
//     } else if (nicknameComplete && birthdateComplete) {
//       const isEndingWithBatchim = getRelationship(nickname)
//       const newNM = isEndingWithBatchim ? `${nickname}이랑` : `${nickname}랑`
//       alert(
//         '디버그용\n' +
//           '별명 뒤 조사 붙이기 :' +
//           newNM +
//           '\n' +
//           '생년월일 출력 : ' +
//           birthdate,
//       )

//       router.push('/mbti')
//     }
//   }

//   useEffect(() => {
//     setCanStart(nickname !== '' || birthdate !== '')
//   }, [nickname, birthdate])

//   return (
//     <div className="w-[375px] h-[740px] relative overflow-hidden bg-gradient-to-b from-[#f9efe1] to-[#fdfaf5]">
//       <div
//         className={`flex justify-center items-center w-[335px] absolute left-5 top-[513px] gap-2.5 px-6 py-4 rounded-2xl ${canStart ? 'bg-[#2b1e08]' : 'bg-[#c2c2c2]'}`}
//         onClick={canStart ? handleNextClick : handleStartClick}
//       >
//         <p className="flex-grow w-[287px] h-6 text-base font-bold text-center text-white">
//           {canStart ? '시작하기' : '내 친구와 궁합보기'}
//         </p>
//       </div>
//       <div className="flex flex-col justify-start items-start absolute left-5 top-[213px] gap-6">
//         <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
//           <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
//             닉네임
//           </p>
//           <div
//             className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-[335px] h-11 relative gap-[110px] px-3 py-2.5 rounded-xl bg-[#fdfaf5] border ${isNicknameFocused || nickname ? 'border-[#2b1e08]' : 'border-[#c2c2c2]'}`}
//           >
//             <input
//               ref={nicknameRef}
//               type="text"
//               placeholder="한글 5자 이하"
//               value={nickname}
//               onChange={handleNicknameChange}
//               onFocus={handleInputFocus(setIsNicknameFocused)}
//               onBlur={handleNicknameBlur}
//               className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-left bg-transparent border-none focus:outline-none ${isNicknameFocused || nickname ? 'text-[#2b1e08]' : 'text-neutral-400'}`}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
//           <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
//             생년월일
//           </p>
//           <div
//             className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-[335px] h-11 relative gap-[110px] px-3 py-2.5 rounded-xl bg-[#fdfaf5] border ${isBirthdateFocused || birthdate ? 'border-[#2b1e08]' : 'border-[#c2c2c2]'}`}
//           >
//             <input
//               ref={birthdateRef}
//               type="text"
//               placeholder="2000.01.01"
//               value={birthdate}
//               onChange={handleBirthdateChange}
//               onFocus={handleInputFocus(setIsBirthdateFocused)}
//               onBlur={handleBirthdateBlur}
//               className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-left bg-transparent border-none focus:outline-none ${isBirthdateFocused || birthdate ? 'text-[#2b1e08]' : 'text-neutral-400'}`}
//             />
//           </div>
//         </div>
//       </div>
//       <p className="absolute left-[68px] top-[106px] text-lg font-bold text-center text-[#2b1e08]">
//         먼저 닉네임과 태어난 날을 알려줘!
//       </p>
//       {!canStart &&
//         (error ? (
//           <p className="absolute left-[76px] top-[593px] text-base text-center text-[#858585]">
//             닉네임과 생년월일을 확인해 주세요.
//           </p>
//         ) : (
//           <p className="absolute left-[94px] top-[593px] text-sm text-center text-[#858585]">
//             <span className="text-sm text-center text-[#858585]">
//               실명보다는 나와 친구만 알 수 있는
//             </span>
//             <br />
//             <span className="text-sm text-center text-[#858585]">
//               닉네임을 입력하길 권장할게요.
//             </span>
//           </p>
//         ))}
//     </div>
//   )
// }

// export default Home

'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const Home: React.FC = () => {
  const router = useRouter()
  const [nickname, setNickname] = useState<string>('')
  const [nicknameComplete, setNicknameComplete] = useState<boolean>(false)
  const [birthdate, setBirthdate] = useState<string>('')
  const [birthdateComplete, setBirthdateComplete] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [canStart, setCanStart] = useState<boolean>(false)
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [isNicknameFocused, setIsNicknameFocused] = useState<boolean>(false)
  const [isBirthdateFocused, setIsBirthdateFocused] = useState<boolean>(false)

  const nicknameRef = useRef<HTMLInputElement>(null)
  const birthdateRef = useRef<HTMLInputElement>(null)

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value
    const koreanCharRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/

    if (koreanCharRegex.test(input) && input.length <= 5) {
      setNickname(input)
      setNicknameComplete(true)
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
    setBirthdate(input)
    setBirthdateComplete(input.length === 8)
  }

  const handleBirthdateBlur = () => {
    setIsTyping(false)
    setIsBirthdateFocused(false)
    let input = birthdate.replace(/[^\d]/g, '')
    if (input.length <= 4) {
      setBirthdate(input)
    } else if (input.length <= 6) {
      setBirthdate(`${input.slice(0, 4)}.${input.slice(4, 6)}`)
    } else {
      setBirthdate(
        `${input.slice(0, 4)}.${input.slice(4, 6)}.${input.slice(6, 8)}`,
      )
      setBirthdateComplete(input.length === 8)
    }
  }

  const handleNicknameBlur = () => {
    setIsTyping(false)
    setIsNicknameFocused(false)
  }

  const handleInputFocus =
    (setFocusState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
      setIsTyping(true)
      setFocusState(true)
    }

  const handleStartClick = () => {
    if (nickname === '' || birthdate === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  const getRelationship = (name: string): boolean | null => {
    if (typeof name !== 'string') return null

    const lastLetter = name[name.length - 1]
    const uni = lastLetter.charCodeAt(0)

    if (uni < 44032 || uni > 55203) return null

    return (uni - 44032) % 28 !== 0
  }

  const handleNextClick = () => {
    if (nickname === '' || birthdate === '') {
      if (nickname === '') {
        nicknameRef.current?.focus()
      } else if (birthdate === '') {
        birthdateRef.current?.focus()
      }
      alert('닉네임과 생년월일을 모두 입력해 주세요.')
    } else if (birthdate.length < 8) {
      birthdateRef.current?.focus()
      alert('생년월일을 잘못 입력하셨습니다.')
    } else if (nicknameComplete && birthdateComplete) {
      const isEndingWithBatchim = getRelationship(nickname)
      const newNM = isEndingWithBatchim ? `${nickname}이랑` : `${nickname}랑`
      alert(
        '디버그용\n' +
          '별명 뒤 조사 붙이기 :' +
          newNM +
          '\n' +
          '생년월일 출력 : ' +
          birthdate,
      )

      router.push('/mbti')
    }
  }

  useEffect(() => {
    setCanStart(nickname !== '' || birthdate !== '')
  }, [nickname, birthdate])

  return (
    <div className="w-[375px] h-[740px] relative overflow-hidden bg-gradient-to-b from-[#f9efe1] to-[#fdfaf5]">
      <div
        className={`flex justify-center items-center w-[335px] absolute left-5 top-[513px] gap-2.5 px-6 py-4 rounded-2xl ${canStart ? 'bg-[#2b1e08]' : 'bg-[#c2c2c2]'}`}
        onClick={canStart ? handleNextClick : handleStartClick}
      >
        <p className="flex-grow w-[287px] h-6 text-base font-bold text-center text-white">
          {canStart ? '시작하기' : '내 친구와 궁합보기'}
        </p>
      </div>
      <div className="flex flex-col justify-start items-start absolute left-5 top-[213px] gap-6">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
            닉네임
          </p>
          <div
            className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-[335px] h-11 relative gap-[110px] px-3 py-2.5 rounded-xl bg-[#fdfaf5] border ${isNicknameFocused || nickname ? 'border-[#2b1e08]' : 'border-[#c2c2c2]'}`}
          >
            <input
              ref={nicknameRef}
              type="text"
              placeholder="한글 5자 이하"
              value={nickname}
              onChange={handleNicknameChange}
              onFocus={handleInputFocus(setIsNicknameFocused)}
              onBlur={handleNicknameBlur}
              className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-left bg-transparent border-none focus:outline-none ${isNicknameFocused || nickname ? 'text-[#2b1e08]' : 'text-neutral-400'}`}
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
            생년월일
          </p>
          <div
            className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-[335px] h-11 relative gap-[110px] px-3 py-2.5 rounded-xl bg-[#fdfaf5] border ${isBirthdateFocused || birthdate ? 'border-[#2b1e08]' : 'border-[#c2c2c2]'}`}
          >
            <input
              ref={birthdateRef}
              type="text"
              placeholder="2000.01.01"
              value={birthdate}
              onChange={handleBirthdateChange}
              onFocus={handleInputFocus(setIsBirthdateFocused)}
              onBlur={handleBirthdateBlur}
              className={`flex-grow-0 flex-shrink-0 text-sm font-medium text-left bg-transparent border-none focus:outline-none ${isBirthdateFocused || birthdate ? 'text-[#2b1e08]' : 'text-neutral-400'}`}
            />
          </div>
        </div>
      </div>
      <p className="absolute left-[68px] top-[106px] text-lg font-bold text-center text-[#2b1e08]">
        먼저 닉네임과 태어난 날을 알려줘!
      </p>
      {!canStart &&
        (error ? (
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
