type Props = {
  children: React.ReactNode
  onClick: Function
}

export const SubmitButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="w-full rounded-md bg-popoc-black p-3 hover:bg-popoc-black/75"
      onClick={() => onClick()}
    >
      <span className="font-bold text-white">{children}</span>
    </button>
  )
}
