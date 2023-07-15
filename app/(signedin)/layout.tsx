import { SignedInHeader } from '@/components/layout/SignedInHeader'
import { SignedInFooter } from '@/components/layout/SignedInFooter'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full min-h-screen grow flex-col gap-8">
      <div className="shadow-md">
        <SignedInHeader />
      </div>
      <div className="flex grow flex-col px-6">{children}</div>
      <SignedInFooter />
    </div>
  )
}
