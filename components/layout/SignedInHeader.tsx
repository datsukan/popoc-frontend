import { Logo } from '@/components/Logo'

export const SignedInHeader = () => {
  return (
    <div className="h-16 bg-popoc-black px-5 sm:px-6">
      <div className="flex h-full items-center justify-between">
        <Logo dark />
      </div>
    </div>
  )
}
