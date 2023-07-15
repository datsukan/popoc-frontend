import Link from 'next/link'

export const SignInButton = () => {
  return (
    <Link href="/signin">
      <div className="h-full rounded-lg border-2 border-popoc-black px-3 py-1 hover:bg-popoc-black/10 sm:px-7 sm:py-2">
        <span className="text-sm font-bold text-popoc-black">ログイン</span>
      </div>
    </Link>
  )
}
