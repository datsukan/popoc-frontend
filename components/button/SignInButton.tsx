import Link from 'next/link'

export const SignInButton = () => {
  return (
    <Link href="">
      <div className="h-full rounded-lg border-2 border-popoc-black px-5 py-1 hover:bg-popoc-black/10">
        <span className="text-sm font-bold text-popoc-black">ログイン</span>
      </div>
    </Link>
  )
}
