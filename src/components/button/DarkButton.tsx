interface ButtonProps {
  label: string
  size: 'small' | 'medium' | 'large' // size에 대한 타입 지정
  state: 'pressed' | 'disabled'
}

function DarkButton({ size, label, state }: ButtonProps) {
  let sizeClass = ''
  if (size === 'large') {
    sizeClass = 'w-80 h-14'
  } else if (size === 'medium') {
    sizeClass = 'w-44 h-14'
  } else if (size === 'small') {
    sizeClass = 'w-20 h-11'
  }

  let stateClass = ''
  if (state === 'pressed') {
    stateClass = 'bg-Brown border-black'
  } else if (state === 'disabled') {
    stateClass = 'bg-Gray opacity-60 border-Gray'
  } else {
    stateClass = 'bg-Dark-Brown border-black'
  }

  const style = `border-[1px] rounded-2xl text-white text-base hover:bg-Brown hover:opacity-100 ${sizeClass}  ${stateClass}`
  return (
    <button type="button" className={style}>
      {label}
    </button>
  )
}

export default DarkButton
