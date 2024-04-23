interface ButtonProps {
  label: string
  width: string
  height: string
}

function Button({ label, width, height }: ButtonProps) {
  const style = `border-2 w-${width} h-${height} bg-Dark-Brown text-white text-base hover:bg-Brown`
  return (
    <button type="button" className={style}>
      {label}
    </button>
  )
}

export default Button
