import React from 'react'

interface ButtonProps {
  label: string
  size: 'small' | 'medium' | 'large'
  state: 'pressed' | 'disabled'
  type: 'submit' | 'button' | 'reset'
  onClick: () => void
}

function LightButton({ size, label, state, type, onClick }: ButtonProps) {
  let sizeClass = ''
  if (size === 'large') {
    sizeClass = 'w-[335px] h-[56px]'
  } else if (size === 'medium') {
    sizeClass = 'w-[174px] h-[56px]'
  } else if (size === 'small') {
    sizeClass = 'w-[76px] h-[44px]'
  }

  let stateClass = ''
  if (state === 'pressed') {
    stateClass = 'bg-Beige border-black'
  } else if (state === 'disabled') {
    stateClass = 'bg-white border-Gray opacity-60'
  } else {
    stateClass = 'bg-White border-black'
  }

  const style = `border-[1px] rounded-2xl text-base hover:bg-Beige hover:opacity-100 font-bold ${sizeClass}  ${stateClass}`

  return (
    <button type={type || 'button'} className={style} onClick={onClick}>
      {label} <p className="opacity-20" />
    </button>
  )
}

export default LightButton
