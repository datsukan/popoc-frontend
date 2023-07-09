import { Logo } from '@/components/Logo'

export const SignedInHeader = () => {
  return (
    <div className="px-8 pt-8">
      <div className="flex items-center justify-between">
        <Logo />
      </div>
    </div>
  )
}
