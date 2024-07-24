import React from 'react'

type RelationshipType =
  | 'best'
  | 'good'
  | 'ambiguous'
  | 'mediocre'
  | 'mismatched'

interface RelationshipTagProps {
  type: RelationshipType
  text: string
}

const RelationshipTag: React.FC<RelationshipTagProps> = ({ type, text }) => {
  const getBackgroundColor = (type: RelationshipType): string => {
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
    }
  }

  return (
    <div
      className={`flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-xl ${getBackgroundColor(type)}`}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#2b1e08]">
        {text}
      </p>
    </div>
  )
}

export default RelationshipTag
