interface ButtonProps {
  label: string
  size: 'small' | 'medium' | 'large' // size에 대한 타입 지정
  state: 'pressed' | 'disabled'
  type: 'submit' | 'button' | 'reset'
  onClick: () => void
}

function DarkButton({ size, label, state, type, onClick }: ButtonProps) {
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
    stateClass = 'bg-Brown border-black'
  } else if (state === 'disabled') {
    stateClass = 'bg-Gray opacity-60 border-Gray'
  } else {
    stateClass = 'bg-Dark-Brown border-black'
  }

  const style = `border-[1px] rounded-2xl text-white text-base hover:bg-Brown hover:opacity-100 font-bold ${sizeClass}  ${stateClass}`
  return (
    <button type={type} className={style} onClick={onClick}>
      {label}
    </button>
  )
}

export default DarkButton
