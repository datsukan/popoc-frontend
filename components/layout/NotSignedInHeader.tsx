import { Logo } from '@/components/Logo'
import { SignUpButton } from '@/components/button/SignUpButton'
import { SignInButton } from '@/components/button/SignInButton'

export const NotSignedInHeader = () => {
  return (
    <div className="h-16 px-3 sm:px-8">
      <div className="flex h-full items-center justify-between">
        <Logo />
        <div className="flex gap-2 sm:gap-5">
          <SignUpButton />
          <SignInButton />
        </div>
      </div>
    </div>
  )
}
