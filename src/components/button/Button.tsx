interface ButtonProps {
  label: string
  size: string
}

function Button({ label, size }: ButtonProps) {
  const sized = size === 'small' ? '10' : '20'
  const style = `border-2 bg-red-300 w-20 h-${sized}`
  return (
    <button type="button" className={style}>
      <p className="text-red-600">{label}</p>
    </button>
  )
}

export default Button
