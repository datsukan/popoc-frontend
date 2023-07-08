type Props = {
  onClick: Function
}

export const SignUpButton = ({ onClick }: Props) => {
  return (
    <button
      className="w-full rounded-md bg-popoc-black p-3 hover:bg-popoc-black/75"
      onClick={() => onClick()}
    >
      <span className="font-bold text-white">アカウント登録する</span>
    </button>
  )
}
