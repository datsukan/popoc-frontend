import { SignedInHeader } from '@/components/layout/SignedInHeader'
import { Footer } from '@/components/layout/Footer'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SignedInHeader />
      <div className="container mx-auto flex h-full grow flex-col">
        <div className="flex grow flex-col">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
