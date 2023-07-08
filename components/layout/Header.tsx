import { Logo } from '@/components/Logo'
import { SignUpButton } from '@/components/button/SignUpButton'
import { SignInButton } from '@/components/button/SignInButton'

export const Header = () => {
  return (
    <div className="px-8 pt-8">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex gap-5">
          <SignUpButton />
          <SignInButton />
        </div>
      </div>
    </div>
  )
}
