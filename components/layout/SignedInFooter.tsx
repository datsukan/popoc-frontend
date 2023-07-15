import { Logo } from '@/components/Logo'
import { Copyright } from '@/components/Copyright'

export const SignedInFooter = () => {
  return (
    <div className="flex items-center justify-between bg-popoc-black px-6 py-8">
      <Logo dark />
      <Copyright dark />
    </div>
  )
}
