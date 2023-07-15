import Link from 'next/link'

export const SignUpButton = () => {
  return (
    <Link href="/signup">
      <button className="h-full rounded-lg bg-popoc-black px-3 py-1 hover:bg-popoc-black/75 sm:px-7 sm:py-2">
        <span className="text-sm font-bold text-white">アカウント登録</span>
      </button>
    </Link>
  )
}
