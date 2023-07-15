import { NotSignedInHeader } from '@/components/layout/NotSignedInHeader'
import { NotSignedInFooter } from '@/components/layout/NotSignedInFooter'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex h-full min-h-screen grow flex-col gap-8 px-3 pt-8 sm:mx-auto sm:px-0">
      <NotSignedInHeader />
      <div className="flex grow flex-col">{children}</div>
      <NotSignedInFooter />
    </div>
  )
}
