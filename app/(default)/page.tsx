import { Hero } from '@/components/layout/Hero'
import { HeroSignUpButton } from '@/components/button/HeroSignUpButton'

export default function Home() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-16">
      <Hero />
      <HeroSignUpButton />
    </div>
  )
}
