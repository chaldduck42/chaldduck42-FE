interface NewButtonProps {
  label: string
  size: number | string
  onClick?: () => void
}

function NewButton({ label, size }: NewButtonProps) {
  return (
    <button type="button" className={`border-2 bg-red-300 w-32 h-20`}>
      <p className="text-red-600">{label}</p>
    </button>
  )
}

export default NewButton
