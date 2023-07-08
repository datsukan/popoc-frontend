import Link from 'next/link'

export const HeroSignUpButton = () => {
  return (
    <Link href="">
      <div className="rounded-lg bg-popoc-black px-6 py-3 hover:bg-popoc-black/75">
        <span className="font-bold text-white">いますぐ登録する</span>
      </div>
    </Link>
  )
}
