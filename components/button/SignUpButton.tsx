import Link from 'next/link'

export const SignUpButton = () => {
  return (
    <Link href="">
      <button className="h-full rounded-lg bg-popoc-black px-5 py-1 hover:bg-popoc-black/75">
        <span className="text-sm font-bold text-white">アカウント登録</span>
      </button>
    </Link>
  )
}
