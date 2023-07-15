import Link from 'next/link'

type Props = {
  dark?: boolean
}

export const Logo = ({ dark }: Props) => {
  const bgColorClassName = dark ? 'bg-white' : 'bg-popoc-black'
  const textColorClassName = dark ? 'text-white' : 'text-popoc-black'

  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <div className={`h-5 w-5 rounded-full ${bgColorClassName}`}></div>
        <div>
          <h1 className={`text-lg font-bold ${textColorClassName}`}>Popoc</h1>
        </div>
      </div>
    </Link>
  )
}
