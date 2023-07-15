import { Logo } from '@/components/Logo'
import { Copyright } from '@/components/Copyright'

export const NotSignedInFooter = () => {
  return (
    <div className="flex items-center justify-between border-t py-10">
      <Logo />
      <Copyright />
    </div>
  )
}
