interface ButtonProps {
  label: string
  size: 'small' | 'medium' | 'large' // size에 대한 타입 지정
  state: 'pressed' | 'disabled'
}

function LightButton({ size, label, state }: ButtonProps) {
  let sizeClass = ''
  if (size === 'large') {
    sizeClass = 'w-80 h-14'
  } else if (size === 'medium') {
    sizeClass = 'w-44 h-14'
  } else if (size === 'small') {
    sizeClass = 'w-20 h-12'
  }

  let stateClass = ''
  if (state === 'pressed') {
    stateClass = 'bg-Begie border-black'
  } else if (state === 'disabled') {
    stateClass = 'bg-white border-Gray opacity-60'
  } else {
    stateClass = 'bg-White border-black'
  }

  const style = `border-[1px] rounded-2xl text-base hover:bg-Begie hover:opacity-100 ${sizeClass}  ${stateClass}`
  return (
    <button type="button" className={style}>
      {label} <p className="opacity-20" />
    </button>
  )
}

export default LightButton
