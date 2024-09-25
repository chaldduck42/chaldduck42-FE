import React from 'react'

interface RelationshipTagProps {
  friendNm: React.ReactNode
  // particle: React.ReactNode
  type: RelationshipType
  children: React.ReactNode
}

type RelationshipType =
  | 'best'
  | 'good'
  | 'ambiguous'
  | 'mediocre'
  | 'mismatched'

const RelationshipTag: React.FC<RelationshipTagProps> = ({
  friendNm,
  particle,
  type,
  children,
}) => {
  console.log(type)
  const getBackgroundColor = () => {
    switch (type) {
      case 'best':
        return 'bg-[#f69877]'
      case 'good':
        return 'bg-[#bab4d2]'
      case 'ambiguous':
        return 'bg-[#c1e37e]'
      case 'mediocre':
        return 'bg-[#f9de78]'
      case 'mismatched':
        return 'bg-[#97b3da]'
      default:
        return 'error'
    }
  }

  // const getRelationship = (name: string): boolean | null => {
  //   if (typeof name !== 'string') return null

  //   const lastLetter = name[name.length - 1]
  //   const uni = lastLetter.charCodeAt(0)

  //   if (uni < 44032 || uni > 55203) return null

  //   return (uni - 44032) % 28 !== 0

  // const isEndingWithBatchim = getRelationship(state.nickname)
  // const newNM = isEndingWithBatchim
  //   ? `${state.nickname}이랑`
  //   : `${state.nickname}랑`
  // 닉네임 값으로 이랑, 랑 붙여야함
  // }

  return (
    <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[327px] px-4 py-5 rounded-2xl bg-[#fbf4ea]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-2">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#2b1e08]">
              {friendNm}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#2b1e08]">
              랑
            </p>
          </div>
        </div>
        <div
          className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-xl ${getBackgroundColor()}`}
        >
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#2b1e08]">
            {children}
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[57px] relative">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-neutral-400">
          자세히
        </p>
      </div>
    </div>
  )
}

export default RelationshipTag
