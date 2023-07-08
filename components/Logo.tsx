import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded-full bg-popoc-black"></div>
        <div>
          <h1 className="text-lg font-bold">Popoc</h1>
        </div>
      </div>
    </Link>
  )
}
